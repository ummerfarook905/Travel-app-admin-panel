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
    console.log(bookings)
    if (location.state?.message) {
      const timer = setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      weekday: 'short'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatSimpleDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const headers = [
    { key: 'adventureName', label: 'Adventure Name' },
    { key: 'userName', label: 'User Name' },
    {
      key: 'checkIn',
      label: 'Check In',
      render: (date) => formatDate(date)
    },
    {
      key: 'checkOut',
      label: 'Check Out',
      render: (date) => formatDate(date)
    },
    {
      key: 'bookingDate',
      label: 'Date',
      render: (date) => formatSimpleDate(date)
    },
    {
      key: 'price',
      label: 'Price',
      render: (price) => `$${Number(price).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`
    },

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
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {location.state?.message && (
        <div className={`mb-4 p-4 rounded ${
          location.state.type === 'error' 
            ? 'bg-red-100 border border-red-400 text-red-700' 
            : 'bg-green-100 border border-green-400 text-green-700'
        }`}>
          {location.state.message}
        </div>
      )}
      
      <div className="overflow-x-auto">
        <Table 
          headers={headers}
          rows={bookings}
          actions={actions}
          nameAsLink={true}
          onNameClick={handleViewDetails}
        />
      </div>
    </div>
  );
};

export default AdventuresBooking;