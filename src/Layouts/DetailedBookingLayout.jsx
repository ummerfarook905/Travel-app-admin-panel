import HotelHeader from "../components/BookingHeader";
import BookingTopBar from "../components/BookingTopBar";
import CustomerInfo from "../components/CustomerInfo";
import ImageGallery from "../components/ImageGallery";
import TimingInfo from "../components/TimingInfo";

const DetailedBookingLayout = ({booking ,type}) => {
   if (!booking){
    return <div className="p-6 text-red-500">Booking not found</div>
   }
  return (
    <div className="min-h-screen p-6 md:p-10">
      <BookingTopBar name={booking.owner.name} phone={booking.owner.phone}/>
      <div className="bg-[#D6FFEA] rounded-b-lg pt-4 px-6 pb-6 md:px-8 md:pb-8 shadow-lg pl-6">
       <HotelHeader
       name={booking.name}
       rating={booking.rating}
       location={booking.location}/>
       <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3 space-y-6">
            <ImageGallery images={booking.images}/>
            <TimingInfo roomNo={booking.roomNo} type={type}/>
          </div>
          <div className="w-full lg:w-auto">
          <CustomerInfo
            customer={booking.customer}
            bookingDetails={{
              bookedon:booking.bookedon,
              checkIn:booking.checkIn,
              checkOut:booking.checkOut,
              guestCount:booking.guestCount,
              roomCount:booking.roomCount,
              price:booking.price,
            }}
          />
          </div>
       </div>
      </div>
      
    </div>
  );
};

export default DetailedBookingLayout;