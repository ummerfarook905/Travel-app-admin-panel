
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import SearchInput from "../components/SearchInput";
import {
  confirmBooking,
  cancelBooking,
  fetchAdventureBookings
} from "../redux/adventuresSlice";

const AdventuresBookings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const allBookings = useSelector((state) => state.adventures.bookings);

  const bookings = useMemo(() => {
    // ✅ Ensure only adventure bookings are shown (relies on 'type' field)
    return allBookings.filter((b) => b.type === "adventure");
  }, [allBookings]);

  useEffect(() => {
    dispatch(fetchAdventureBookings());
  }, [dispatch]);

  const headers = [
    { key: "adventureName", label: "Name" },
    { key: "userName", label: "User Name" },
    { key: "checkIn", label: "Check-in" },
    { key: "checkOut", label: "Check-out" },
    { key: "price", label: "Price" }
  ];

  const handleConfirm = (booking) => {
    dispatch(confirmBooking({ id: booking.id }));
    return `Booking ${booking.id} confirmed.`;
  };

  const handleCancel = (booking) => {
    dispatch(cancelBooking({ id: booking.id }));
    return `Booking ${booking.id} cancelled.`;
  };

  const handleViewDetails = (booking) => {
    const id = booking.id.replace("#", "");
    navigate(`/adventure-bookings/adventure/${id}`, { state: { booking } });
  };

  const actions = [
    {
      label: "Confirm",
      variant: "success",
      requireConfirmation: true,
      confirmationMessage: "Are you sure you want to confirm this adventure booking?",
      confirmationVariant: "success",
      handler: handleConfirm
    },
    {
      label: "Cancel",
      variant: "danger",
      requireConfirmation: true,
      confirmationMessage: "Are you sure you want to cancel this adventure booking?",
      handler: handleCancel
    },
    {
      label: "View Details",
      handler: handleViewDetails
    }
  ];

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return bookings.filter(
      (b) =>
        b.adventureName?.toLowerCase().includes(q) ||
        b.userName?.toLowerCase().includes(q) ||
        b.id?.toLowerCase().includes(q)
    );
  }, [bookings, searchQuery]);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-4 flex">
        <SearchInput onSearch={setSearchQuery} placeholder="Search adventures..." />
      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No bookings found.</div>
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
            itemsPerPage: 2,
            position: "top"
          }}
        />
      )}
    </div>
  );
};

export default AdventuresBookings;
