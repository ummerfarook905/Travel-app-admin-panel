import React from "react";

const CustomerInfoCard = ({ customer }) => (
  <div className="w-1/3 bg-[#004d40] text-white p-4 rounded-lg space-y-2">
    <h3 className="text-lg font-bold">{customer.name}</h3>
    <p className="text-sm text-gray-200">{customer.email}</p>
    <p className="text-sm text-gray-200">{customer.phone}</p>
    <hr className="border-gray-400 my-2" />
    <p>Booked on: <strong>{customer.bookedOn}</strong></p>
    <p>Check-in: <strong>{customer.checkIn}</strong></p>
    <p>Check-out: <strong>{customer.checkOut}</strong></p>
    <p>Guest: <strong>{customer.guests}</strong></p>
    <p>Room: <strong>{customer.room}</strong></p>
    <p>Price: <strong>{customer.price}</strong></p>
  </div>
);

export default CustomerInfoCard;
