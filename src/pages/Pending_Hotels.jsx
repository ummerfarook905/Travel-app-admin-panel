
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Table from "../components/Table";
import SearchInput from "../components/SearchInput";
import {
  approveHotel,
  rejectHotel,
  fetchHotelsAsync,
} from "../redux/hotelsSlice";

const Pending_Hotels = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch hotels from Redux state
  const pending = useSelector(state => state.hotels.pending);
  const status = useSelector(state => state.hotels.status);
  const error = useSelector(state => state.hotels.error);

  // Fetch data on mount
  useEffect(() => {
    dispatch(fetchHotelsAsync());
  }, [dispatch]);

  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' },
    { key: 'rooms', label: 'Rooms' },
  ];

  const handleApprove = (hotel) => {
    dispatch(approveHotel({ id: hotel.id }));
    return `Hotel ${hotel.id} approved successfully!`;
  };

  const handleReject = (hotel) => {
    dispatch(rejectHotel({ id: hotel.id }));
    return `Hotel ${hotel.id} rejected!`;
  };

  const handleViewDetails = (hotel) => {
    const urlId = hotel.id.replace('#', '');
    navigate(`/pending-hotels/${urlId}`, {
      state: { hotel },
    });
  };

  const actions = [
    {
      label: 'Approve',
      variant: 'success',
      requireConfirmation: true,
      confirmationMessage: 'Are you sure you want to approve this hotel?',
      confirmationVariant: 'success',
      handler: handleApprove,
    },
    {
      label: 'Reject',
      variant: 'danger',
      requireConfirmation: true,
      confirmationMessage: 'Are you sure you want to reject this hotel?',
      handler: handleReject,
    },
    {
      label: 'View Details',
      handler: handleViewDetails,
    },
  ];

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return pending.filter(hotel =>
      hotel.name.toLowerCase().includes(q) ||
      hotel.id.toLowerCase().includes(q) ||
      (hotel.location && hotel.location.toLowerCase().includes(q))
    );
  }, [pending, searchQuery]);

  // Show loading/error states
  if (status === 'loading') {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading hotels...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Error fetching hotels: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-4 flex">
        <SearchInput onSearch={setSearchQuery} placeholder="Search hotels..." />
      </div>

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
            position: 'top',
          }}
        />
      )}
    </div>
  );
};

export default Pending_Hotels;
