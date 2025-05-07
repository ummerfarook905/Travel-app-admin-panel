// src/pages/Verified_Hotels.js
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "../components/Table";
import { useEffect } from "react";
import { 
  deactivateHotel,
  activateHotel,
  deleteHotel 
} from "../redux/hotelsSlice";

const Verified_Hotels = () => {
  // Get verified hotels from Redux store
  const verified = useSelector(state => state.hotels.verified);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      const timer = setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  const headers = [
    { key: 'name', label: 'Hotel Name' },
    { key: 'id', label: 'ID' },
    { key: 'joined', label: 'Joined on' },
    { key: 'updated', label: 'Updated On' },
    { key: 'location', label: 'Location' },
    { key: 'status', label: 'Status' },
    { key: 'rooms', label: 'Rooms' }
  ];

  const handleViewDetails = (hotel) => {
    const urlId = hotel.id.replace('#', '');
    navigate(`/verified-hotels/${urlId}`, { 
      state: { hotel } 
    });
  };

  const handleToggleStatus = (hotel) => {
    if (hotel.status === 'Active') {
      dispatch(deactivateHotel({ id: hotel.id }));
    } else {
      dispatch(activateHotel({ id: hotel.id }));
    }
  };

  const handleDelete = (hotel) => {
    if (window.confirm(`Are you sure you want to delete ${hotel.name}?`)) {
      dispatch(deleteHotel({ id: hotel.id }));
    }
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
      handler: handleViewDetails
    },
    {
      label: (hotel) => hotel.status === 'Active' ? 'Deactivate' : 'Activate',
      variant: (hotel) => hotel.status === 'Active' ? 'warning' : 'success',
      handler: handleToggleStatus
    },
    {
      label: 'Delete',
      variant: 'danger',
      handler: handleDelete
    },
    {
      label: 'Edit',
      variant: 'primary',
      handler: handleEdit
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Verified Hotels</h1>
      
      {location.state?.message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {location.state.message}
        </div>
      )}
      
      <Table 
        headers={headers}
        rows={verified}
        actions={actions}
        nameAsLink={true}
        onNameClick={handleViewDetails}
        rowClassName={(hotel) => hotel.status === 'Inactive' ? 'bg-gray-100' : ''}
      />
    </div>
  );
};

export default Verified_Hotels;