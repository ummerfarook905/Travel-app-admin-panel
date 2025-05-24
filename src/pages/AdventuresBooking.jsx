import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '../components/Table';
import { 
  cancelBooking,
  confirmBooking,
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
  const headers = [
    { key: 'adventureName', label: 'Adventure Name' },
    { key: 'userName', label: 'User Name' },
    {
      key: 'checkIn',
      label: 'Check In',
    },
    {
      key: 'checkOut',
      label: 'Check Out',
    },
    
    {
      key: 'price',
      label: 'Price',
     
    },

  ];

  const handleViewDetails = (booking) => {
    navigate(`/adventure-bookings/${booking.id.replace('#', '')}`, {
      state: { booking }
    });
  };

  const handleCancel = (booking) => {
    
    dispatch(cancelBooking({ id: booking.id }));
            return `Booking ${booking.id}  cancelled.`;

  };

  const handleConfirm = (booking) => {
    dispatch(confirmBooking({ id: booking.id }));
        return `Booking ${booking.id} confirmed.`;

  };

  
  const actions = [
 
    {
      label: 'Confirm',
      variant: 'success',
      handler: handleConfirm,
      requireConfirmation: true,
      confirmationMessage: 'Are you sure you want to Confirm this hotel booking?',
      confirmationVariant: 'success', // This will make the dialog green
     },
    {
      label: 'Cancel',
      variant: 'warning',
      handler: handleCancel,
      variant: "danger",
      requireConfirmation: true,
      confirmationMessage: 'Are you sure you want to cancel this Adventure booking?',
     },
      {
        label: 'View Details',
        handler: handleViewDetails
      },
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