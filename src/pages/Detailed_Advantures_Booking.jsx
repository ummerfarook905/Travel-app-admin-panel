import React from "react";
import AdventureBookingHeader from "../components/AdventureBookingHeader";
import CustomerInfoCard from "../components/CustomerInfoCard";
import AdventureBookingInfo from "../components/AdventuresBookingInfo";
import { useLocation } from "react-router-dom";



const Detailed_Adventures_Booking = () => {
  const location = useLocation(); 
  
  const booking = location.state?.booking; 

  if (!booking) {
    return (
      <div className="p-4">
        <p className="text-red-500">No booking data found.</p>
      </div>
    );
  }
  // Dummy data for now
const images = booking.images || [
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg",
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg",
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg",
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg",
  "https://img.freepik.com/free-photo/kayak_53876-138084.jpg"
];

 const customer = {
    name: booking.userName, 
    
    email: booking.email || "notavailable@example.com", 
    
    phone: booking.phone || "N/A", 
    bookedOn: booking.bookedOn || "N/A", 
    
    checkIn: booking.checkIn,
    checkOut: booking.checkOut,
    guests: booking.guests || 1, 
    price: `₹${booking.price || 2500}`,
    image: booking.userImage || "https://randomuser.me/api/portraits/men/32.jpg" 
    
  };
  return (
    <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Adventure Header */}
       <AdventureBookingHeader
        title={booking.adventureName} 
        ownerName={booking.ownerName || "N/A"} 
        ownerPhone={booking.ownerPhone || "N/A"} 
        ownerImage={booking.ownerImage || "https://randomuser.me/api/portraits/men/45.jpg"}
      />

      {/* FLEX Layout for Info and Customer Card */}
      <div className="flex flex-col lg:flex-row gap-8 bg-green-100 p-6 rounded-lg shadow-lg ">
        <div className="lg:w-2/3">
          {/* Adventure Booking Info */}
            <AdventureBookingInfo
            title={booking.adventureName} 
            description={booking.description || "No description available"} 
            location={booking.location || "Unknown"} 
            images={images}
            checkIn={booking.checkIn}
            checkOut={booking.checkOut}
            rating={booking.rating || 4} 
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
