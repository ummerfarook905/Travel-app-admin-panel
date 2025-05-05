import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '../components/Table';
import { 
  cancelBooking,
  confirmBooking,
  deleteBooking 
} from '../redux/adventuresSlice';

const AdventuresBooking = () => {
  const bookings = useSelector(state => state.adventures.bookings);
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
    { key: 'adventureName', label: 'Adventure Name' },
    { key: 'userName', label: 'User Name' },
    {
      key: 'checkIn',
      label: 'Check In',
      render: (date) => new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    },
    {
      key: 'checkOut',
      label: 'Check Out',
      render: (date) => new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    },
    {
      key: 'status',
      label: 'Status',
      render: (status) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          status === 'confirmed' ? 'bg-green-100 text-green-800' :
          status === 'cancelled' ? 'bg-red-100 text-red-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      )
    }
  ];

  const handleViewDetails = (booking) => {
    navigate(`/adventure-bookings/${booking.id.replace('#', '')}`, {
      state: { booking }
    });
  };

  const handleCancel = (booking) => {
    if (window.confirm(`Cancel ${booking.userName}'s booking for ${booking.adventureName}?`)) {
      dispatch(cancelBooking({ id: booking.id }));
    }
  };

  const handleConfirm = (booking) => {
    dispatch(confirmBooking({ id: booking.id }));
  };

  const handleDelete = (booking) => {
    if (window.confirm(`Permanently delete this booking record?`)) {
      dispatch(deleteBooking({ id: booking.id }));
    }
  };

  const actions = [
    {
      label: 'View Details',
      handler: handleViewDetails
    },
    {
      label: 'Confirm',
      variant: 'success',
      handler: handleConfirm,
      showCondition: (booking) => booking.status !== 'confirmed'
    },
    {
      label: 'Cancel',
      variant: 'warning',
      handler: handleCancel,
      showCondition: (booking) => booking.status !== 'cancelled'
    },
    {
      label: 'Delete',
      variant: 'danger',
      handler: handleDelete
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Adventure Bookings</h1>
      
      {location.state?.message && (
        <div className={`mb-4 p-4 rounded ${
          location.state.type === 'error' 
            ? 'bg-red-100 border border-red-400 text-red-700' 
            : 'bg-green-100 border border-green-400 text-green-700'
        }`}>
          {location.state.message}
        </div>
      )}
      
      <Table 
        headers={headers}
        rows={bookings}
        actions={actions}
        nameAsLink={true}
        onNameClick={handleViewDetails}
      />
    </div>
  );
};

export default AdventuresBooking;