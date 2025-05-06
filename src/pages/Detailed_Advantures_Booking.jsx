import React from "react";

import AdventuresBookingHeader from "../components/AdventureBookingHeader";
import AdventuresBookingInfo from "../components/AdventuresBookingInfo";
import CustomerInfoCard from "../components/CustomerInfoCard";
const Detailed_Advantures_Booking = () => {
  const images = Array(6).fill("https://img.freepik.com/free-photo/kayak_53876-138084.jpg");

  const customerData = {
    name: "Customer Name",
    email: "leonabcd@gmail.com",
    phone: "+91 798352799",
    bookedOn: "09-11-2025",
    checkIn: "10-11-2025",
    checkOut: "12-11-2025",
    guests: 1,
    room: 1,
    price: 2500,
  };

  return (
    <div className="p-8 overflow-y-auto">
      <AdventuresBookingHeader
        title="Kayaking Water Adventure"
        ownerName="Owner Name"
        ownerPhone="+91 798352799"
      />

      <div className="bg-[#c8f2dd] rounded-b-xl p-6 shadow-md flex justify-between">
        <AdventuresBookingInfo
          location="Punnamada, Alappuzha, Kerala"
          images={images}
          checkIn="12:00pm"
          checkOut="11:30pm"
        />
        <CustomerInfoCard customer={customerData} />
      </div>
    </div>
  );
};

export default Detailed_Advantures_Booking;
