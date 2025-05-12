import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookingTopBar from "../components/BookingTopBar";
import HotelHeader from "../components/HotelHeader";
import HotelImages from "../components/HotelImages";
import TimingInfo from "../components/TimingInfo";
import CustomerInfo from "../components/CustomerInfo";

const DetailedHotelBooking = () => {
  const { id } = useParams();
  const bookings = useSelector((state) => state.booking.bookings);

  const booking = bookings.find((b) => b.bookingId.replace("#", "") === id);

  if (!booking) {
    return <div className="p-6 text-center text-red-500">Booking not found</div>;
  }

  return (
    <div className="min-h-screen p-6 md:p-10 font-sans bg-[#e8fdf0]">
      <BookingTopBar name={booking.owner.name} phone={booking.owner.phone} />
      
      <div className="bg-[#D6FFEA] rounded-b-lg p-6 md:p-8 shadow-lg mt-2">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 space-y-6">
            <HotelHeader 
              name={booking.name} 
              rating={booking.rating} 
              location={booking.location} 
            />
            
            <HotelImages images={booking.images} />
            
            <TimingInfo roomNo={booking.roomNo} />
          </div>

          <CustomerInfo 
            customer={booking.customer} 
            bookingDetails={{
              bookedOn: booking.bookedOn,
              checkIn: booking.checkIn,
              checkOut: booking.checkOut,
              guestCount: booking.guestCount,
              roomCount: booking.roomCount,
              price: booking.price
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedHotelBooking;