// src/pages/DetailedHotelBooking.jsx
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const DetailedHotelBooking = () => {
  const { id } = useParams();
  const bookings = useSelector((state) => state.booking.bookings);

  const booking = bookings.find((b) => b.bookingId.replace("#", "") === id);

  if (!booking) {
    return <div className="p-6 text-center text-red-500">Booking not found</div>;
  }

  return (
    <div className="min-h-screen p-6 md:p-10 font-sans bg-[#e8fdf0]">
      {/* Top bar */}
      <div className="bg-[#003f2f] text-white flex justify-between items-center px-6 py-4 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <span className="font-semibold">{booking.owner.name}</span>
        </div>
        <span className="text-sm">{booking.owner.phone}</span>
      </div>

      {/* Main content section */}
      <div className="bg-[#D6FFEA] rounded-b-lg p-6 md:p-8 shadow-lg mt-2">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDE: Hotel Info and Images */}
          <div className="w-full lg:w-2/3 space-y-6">
            {/* Hotel Name & Rating */}
            <div>
              <h2 className="text-2xl font-bold text-[#003f2f] flex items-center">
                {booking.name}
                <span className="ml-2 flex">
                  {[...Array(booking.rating)].map((_, i) => (
                    <FaStar key={i} className="text-red-500 ml-1" />
                  ))}
                </span>
              </h2>
              <p className="text-gray-600 flex items-center mt-1">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                {booking.location}
              </p>
            </div>

            {/* Hotel Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {booking.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`hotel-${idx}`}
                  className="rounded-lg object-cover h-36 w-full"
                />
              ))}
            </div>

            {/* Timing Info */}
            <div className="flex text-sm text-gray-700 mt-6 gap-30  justify-center">
              <div className="flex flex-col items-center">
                <FaClock className="text-blue-500 mb-1" />
                <span>Check-Out Time</span>
                <strong>11:30am</strong>
              </div>
              <div className="flex flex-col items-center">
                <FaClock className="text-green-500 mb-1" />
                <span>Check-In Time</span>
                <strong>12:00pm</strong>
              </div>
              <div className="flex flex-col items-center">
                <FaClock className="text-purple-500 mb-1" />
                <span>Room No.</span>
                <strong>{booking.roomNo}</strong>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Customer Info */}
          <div className="bg-[#003f2f] text-white p-5 rounded-xl w-full lg:w-1/3 h-fit">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={booking.customer.photo}
                alt="Customer"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-lg font-bold">{booking.customer.name}</h4>
                <p className="text-sm">{booking.customer.email}</p>
                <p className="text-sm">{booking.customer.phone}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Booked on:</strong> {booking.bookedOn}
              </p>
              <p>
                <strong>Check In Date:</strong> {booking.checkIn}
              </p>
              <p>
                <strong>Check Out Date:</strong> {booking.checkOut}
              </p>
              <p>
                <strong>Guest:</strong> {booking.guestCount}
              </p>
              <p>
                <strong>Room:</strong> {booking.roomCount}
              </p>
              <p>
                <strong>Price:</strong> ₹ {booking.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedHotelBooking;
