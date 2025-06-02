import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DetailedBookingLayout from "../Layouts/DetailedBookingLayout";

const DetailedHotelBooking = () => {
  const { id, type } = useParams();
  const bookings = useSelector((state) => state.booking.bookings);

  const booking = bookings.find(
    (b) => b.bookingId.replace("#", "") === id && b.type === type
  );

  return (
     <div>
      <DetailedBookingLayout booking={booking} type={type}/>
     </div>
  );
};

export default DetailedHotelBooking;
