// src/pages/Pending_Hotels.js
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { approveHotel, rejectHotel } from "../redux/hotelsSlice";
import SearchInput from "../components/SearchInput";
import { useState, useMemo } from "react";

const Pending_Hotels = () => {
  // Get pending hotels from Redux store
  const pending = useSelector(state => state.hotels.pending);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' },
    { key: 'rooms', label: 'Rooms' }
  ];
  
  const handleApprove = (hotel) => {
    dispatch(approveHotel({ id: hotel.id }));
        return `Hotel ${hotel.id} approved successfully!`;
  };

  const handleReject = (hotel) => {
    dispatch(rejectHotel({ id: hotel.id }));
     return `Adventure ${hotel.id} rejected!`; 
  };

  const handleViewDetails = (hotel) => {
    const urlId = hotel.id.replace('#', '');
    navigate(`/pending-hotels/${urlId}`, { 
      state: { hotel } 
    });
  };

  const actions = [
    {
      label: 'Approve',
      variant: 'success',
      requireConfirmation: true,
      confirmationMessage: 'Are you sure you want to approve this hotel?',
      confirmationVariant: 'success', // This will make the dialog green

      handler: handleApprove
    },
    {
      label: 'Reject',
      variant: 'danger',
      requireConfirmation: true,
      confirmationMessage: 'Are you sure you want to reject this hotel?',
      handler: handleReject
    },
    {
      label: 'View Details',
      handler: handleViewDetails
    }
  ];

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return pending.filter(hotel =>
      hotel.name.toLowerCase().includes(q) ||
      hotel.id.toLowerCase().includes(q) ||
      (hotel.location && hotel.location.toLowerCase().includes(q))
    );
  }, [pending, searchQuery]);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-4 flex">
  <SearchInput onSearch={setSearchQuery} placeholder="Search adventures..." />      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No pending hotels awaiting approval</p>
        </div>
      ) : (
        <Table 
          headers={headers}
          renderedData={filtered}
          actions={actions}
          nameAsLink={true}
          onNameClick={handleViewDetails}
          
           pagination={{
    enabled: true,
    itemsPerPage: 2,
    position: 'top', // or 'bottom'
  }}
        />
      )}
    </div>
  );
};

export default Pending_Hotels;