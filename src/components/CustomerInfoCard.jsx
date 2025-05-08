import React from "react";

const CustomerInfoCard = ({ customer }) => (
  <div className="w-72 h-72 bg-[#004d40] text-white p-4 rounded-xl shadow-md flex flex-col justify-between">
    {/* Profile section */}
    <div className="flex items-center gap-3">
      <img
        src={customer.image || "https://via.placeholder.com/36"}
        alt="Customer Avatar"
        className="w-10 h-10 rounded-full object-cover border-2 border-white"
      />
      <div>
        <h3 className="text-base font-semibold">{customer.name}</h3>
        <p className="text-sm text-gray-200">{customer.email}</p>
        <p className="text-sm text-gray-200">{customer.phone}</p>
      </div>
    </div>

    {/* Divider */}
    {/* <hr className="border-t border-gray-400 my-2" /> */}

    {/* Booking details */}
    <div className="text-sm leading-relaxed space-y-1">
      <p>Booked on: <strong>{customer.bookedOn}</strong></p>
      <p>Check-in: <strong>{customer.checkIn}</strong></p>
      <p>Check-out: <strong>{customer.checkOut}</strong></p>
      <p>Guest: <strong>{customer.guests}</strong></p>
      <p>Price: <strong>₹{customer.price}</strong></p>
    </div>
  </div>
);

export default CustomerInfoCard;
