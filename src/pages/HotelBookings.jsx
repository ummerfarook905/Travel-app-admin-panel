// src/pages/Hotel_Bookings.jsx
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { confirmBooking, cancelBooking } from "../redux/bookingsSlice";

const HotelBookings = () => {
  const bookings = useSelector((state) => state.booking.bookings);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const headers = [
    { key: "name", label: "Hotel Name" },
    { key: "username", label: "User Name" },
    { key: "checkIn", label: "Check-in" },
    { key: "checkOut", label: "Check-out" },
    { key: "status", label: "Status" }
  ];

  const handleConfirm = (booking) => {
    dispatch(confirmBooking({ id: booking.bookingId }));
    alert(`Booking ${booking.bookingId} confirmed.`);
  };

  const handleCancel = (booking) => {
    dispatch(cancelBooking({ id: booking.bookingId }));
    alert(`Booking ${booking.bookingId} cancelled.`);
  };

  const handleViewDetails = (booking) => {
    const id = booking.bookingId.replace("#", "");
    navigate(`/hotel-bookings/${id}`, { state: { booking } });
  };

  const actions = [
    {
      label: "Confirm",
      variant: "success",
      handler: handleConfirm
    },
    {
      label: "Cancel",
      variant: "danger",
      handler: handleCancel
    },
    {
      label: "View Details",
      handler: handleViewDetails
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {bookings.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No bookings found.</p>
        </div>
      ) : (
        <Table
          headers={headers}
          rows={bookings}
          actions={actions}
          nameAsLink={true}
          onNameClick={handleViewDetails}
        />
      )}
    </div>
  );
};

export default HotelBookings;
