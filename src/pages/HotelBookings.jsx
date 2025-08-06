

// src/pages/Hotel_Bookings.jsx
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { confirmBooking, cancelBooking, fetchBookings } from "../redux/bookingsSlice";
import { selectConfirmedBookings } from "../redux/selectors";
import { useEffect, useMemo, useState } from "react";
import SearchInput from "../components/SearchInput";

const HotelBookings = () => {
  const bookings = useSelector(selectConfirmedBookings);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const headers = [
    { key: "name", label: " Name" },
    { key: "username", label: "User Name" },
    { key: "checkIn", label: "Check-in" },
    { key: "checkOut", label: "Check-out" },
    { key: "price", label: "Price" }
  ];

  const handleConfirm = (booking) => {
    dispatch(confirmBooking({ id: booking.bookingId }));
    return `Booking ${booking.bookingId} confirmed.`;
  };

  const handleCancel = (booking) => {
    dispatch(cancelBooking({ id: booking.bookingId }));
    return `Booking ${booking.bookingId} cancelled.`;
  };

  const handleViewDetails = (booking) => {
    const id = booking.bookingId.replace("#", "");
    navigate(`/hotel-bookings/hotel/${id}`, { state: { booking } });
  };

  const actions = [
    {
      label: "Confirm",
      variant: "success",
      requireConfirmation: true,
      confirmationMessage: 'Are you sure you want to Confirm this hotel booking?',
      confirmationVariant: 'success',
      handler: handleConfirm
    },
    {
      label: "Cancel",
      variant: "danger",
      requireConfirmation: true,
      confirmationMessage: 'Are you sure you want to cancel this hotel booking?',
      handler: handleCancel
    },
    {
      label: "View Details",
      handler: handleViewDetails
    }
  ];

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return bookings.filter((b) =>
      b.name.toLowerCase().includes(q) ||
      b.username.toLowerCase().includes(q) ||
      (b.bookingId && b.bookingId.toLowerCase().includes(q))
    );
  }, [bookings, searchQuery]);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-4 flex">
        <SearchInput onSearch={setSearchQuery} placeholder="Search hotel bookings..." />
      </div>
      {bookings.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No bookings found.</p>
        </div>
      ) : (
        <Table
          headers={headers}
          renderedData={filtered}
          actions={actions}
          nameAsLink={true}
          onNameClick={handleViewDetails}
          showProfilePicture={false}
          pagination={{
            enabled: true,
            itemsPerPage: 10,
            position: 'top'
          }}
        />
      )}
    </div>
  );
};

export default HotelBookings;
