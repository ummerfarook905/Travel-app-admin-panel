// Updated Verified_Hotels.js
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "../components/Table";
import { useEffect } from "react";
import { deleteHotel } from "../redux/hotelsSlice";
import SearchBar from "../components/SearchBar";
import { useState, useMemo } from "react";

const Verified_Hotels = () => {
  const verified = useSelector(state => state.hotels.verified);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (location.state?.message) {
      const timer = setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  const headers = [
    { key: 'name', label: ' Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' },
    { key: 'rooms', label: 'Rooms' }
  ];

  const handleViewDetails = (hotel) => {
    const urlId = hotel.id.replace('#', '');
    navigate(`/verified-hotels/${urlId}`, { 
      state: { hotel } 
    });
  };

  const handleDelete = (hotel) => {
    dispatch(deleteHotel({ id: hotel.id }));
    return `Hotel ${hotel.name} deleted successfully!`;
  };
  const handleEdit = (hotel) => {
    const urlId = hotel.id.replace('#', '');
    navigate(`/edit-hotel/${urlId}`, {
      state: { hotel }
    });
  };
  
  const actions = [
    {
      label: 'View Details',
      handler: handleViewDetails,
      requireConfirmation: false

    },
    {
      label: 'Delete',
      variant: 'danger',
      handler: handleDelete,
      requireConfirmation: true,
      confirmationMessage: `Are you sure you want to delete this hotel? This action cannot be undone.`,
      confirmationVariant: 'danger',
    },
    {
      label: 'Edit',
      variant: 'primary',
      handler: handleEdit,
      requireConfirmation: false

    }
  ];

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return verified.filter(hotel =>
      hotel.name.toLowerCase().includes(q) ||
      hotel.id.toLowerCase().includes(q) ||
      (hotel.location && hotel.location.toLowerCase().includes(q))
    );
  }, [verified, searchQuery]);


  return (
    <div className="p-8 max-w-7xl mx-auto">
       <div className="mb-4 flex">
        <SearchBar onSearch={setSearchQuery} />
      </div>
      {location.state?.message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {location.state.message}
        </div>
      )}
      
      <Table 
        headers={headers}
        rows={filtered }
        actions={actions}
        nameAsLink={true}
        onNameClick={handleViewDetails}
      />
    </div>
  );
};

export default Verified_Hotels;