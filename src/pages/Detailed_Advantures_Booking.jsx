import React from "react";
import AdventureBookingHeader from "../components/AdventureBookingHeader";
import CustomerInfoCard from "../components/CustomerInfoCard";
import AdventureBookingInfo from "../components/AdventuresBookingInfo";

// Dummy data for now
const images = [
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg",
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg",
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg",
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg",
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg"
];

const customer = {
  name: "Leon Abcd",
  email: "leonabcd@gmail.com",
  phone: "+91 798352799",
  bookedOn: "09-11-2025",
  checkIn: "10-11-2025",
  checkOut: "12-11-2025",
  guests: 1,
  price: "₹2500",
  image: "https://randomuser.me/api/portraits/men/32.jpg"
};

const Detailed_Adventures_Booking = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Adventure Header */}
      <AdventureBookingHeader
        title="Kayaking Water Adventure"
        ownerName="Siddharth Roy"
        ownerPhone="+91 798352799"
        ownerImage="https://randomuser.me/api/portraits/men/45.jpg"
      />

      {/* FLEX Layout for Info and Customer Card */}
      <div className="flex flex-col lg:flex-row gap-8 bg-green-100 p-6 rounded-lg shadow-lg ">
        <div className="lg:w-2/3">
          {/* Adventure Booking Info */}
          <AdventureBookingInfo
            title="Kayaking Water Adventure"
            description="Experience the thrill of paddling through serene backwaters."
            location="Punnamada, Alappuzha, Kerala"
            images={images}
            checkIn="12:00pm"
            checkOut="11:30pm"
            rating={4}
          />
        </div>

        <div className="lg:w-1/3 mt-6 lg:mt-0">
          {/* Customer Info Card */}
          <CustomerInfoCard customer={customer} />
        </div>
      </div>
    </div>
  );
};

export default Detailed_Adventures_Booking;
