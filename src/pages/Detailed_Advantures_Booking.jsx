// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import DetailedBookingLayout from "../Layouts/DetailedBookingLayout";

// const Detailed_Advantures_Booking = () => {
//   const { id, type } = useParams();
//   const bookings = useSelector((state) => state.adventure.bookings);

//   const booking = bookings.find((b) => b.bookingId.replace("#", "") === id && b.type === type);


//   return (
//    <div>
//  <DetailedBookingLayout booking={booking} type={type}/>
//    </div>
//   );
// };

// export default Detailed_Advantures_Booking;






import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DetailedBookingLayout from "../Layouts/DetailedBookingLayout";

const Detailed_Advantures_Booking = () => {
  const { id, type } = useParams();
 const bookings = useSelector((state) => state.adventures.bookings);

  const booking = bookings.find(
  (b) => (b.id || b.bookingId)?.replace("#", "") === id && b.type === type
  );


  return (
   <div>
 <DetailedBookingLayout booking={booking} type={type}/>
   </div>
  );
};

export default Detailed_Advantures_Booking;