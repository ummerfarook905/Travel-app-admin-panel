// import HotelHeader from "../components/BookingHeader";
// import BookingTopBar from "../components/BookingTopBar";
// import CustomerInfo from "../components/CustomerInfo";
// import ImageGallery from "../components/ImageGallery";
// import TimingInfo from "../components/TimingInfo";

// const DetailedBookingLayout = ({booking ,type}) => {
//    if (!booking){
//     return <div className="p-6 text-red-500">Booking not found</div>
//    }
//   return (
//     <div className="min-h-screen p-6 md:p-10">
//       <BookingTopBar name={booking.owner.name} phone={booking.owner.phone}/>
//       <div className="bg-[#D6FFEA] rounded-b-lg pt-4 px-6 pb-6 md:px-8 md:pb-8 shadow-lg pl-6">
//        <HotelHeader
//        name={booking.name}
//        rating={booking.rating}
//        location={booking.location}/>
//        <div className="flex flex-col lg:flex-row gap-6">
//           <div className="w-full lg:w-2/3 space-y-6">
//             <ImageGallery images={booking.images}/>
//             <TimingInfo roomNo={booking.roomNo} type={type}/>
//           </div>
//           <div className="w-full lg:w-auto">
//           <CustomerInfo
//             customer={booking.customer}
//             bookingDetails={{
//               bookedon:booking.bookedon,
//               checkIn:booking.checkIn,
//               checkOut:booking.checkOut,
//               guestCount:booking.guestCount,
//               roomCount:booking.roomCount,
//               price:booking.price,
//             }}
//           />
//           </div>
//        </div>
//       </div>
      
//     </div>
//   );
// };

// export default DetailedBookingLayout;













// import HotelHeader from "../components/BookingHeader";
// import BookingTopBar from "../components/BookingTopBar";
// import CustomerInfo from "../components/CustomerInfo";
// import ImageGallery from "../components/ImageGallery";
// import TimingInfo from "../components/TimingInfo";

// const DetailedBookingLayout = ({ booking, type }) => {
//   if (!booking) {
//     return <div className="p-6 text-red-500">Booking not found</div>;
//   }

//   // Destructure booking details safely
//   const {
//     owner = {},
//     name,
//     rating,
//     location,
//     images = [],
//     roomNo,
//     customer = {},
//     bookedon,
//     checkIn,
//     checkOut,
//     guestCount,
//     roomCount,
//     price
//   } = booking;

//   return (
//     <div className="min-h-screen p-4 sm:p-6 md:p-10">
//       {/* Top bar with owner info */}
//       <BookingTopBar name={owner.name} phone={owner.phone} />

//       {/* Main content container */}
//       <div className="bg-[#D6FFEA] rounded-b-lg shadow-lg pt-4 px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
        
//         {/* Hotel name, rating & location */}
//         <HotelHeader name={name} rating={rating} location={location} />

//         {/* Two-column layout */}
//         <div className="flex flex-col lg:flex-row gap-6 mt-6">
          
//           {/* Left section: Gallery & Timing */}
//           <div className="w-full lg:w-2/3 space-y-6">
//             <ImageGallery images={images} />
//             <TimingInfo roomNo={roomNo} type={type} />
//           </div>

//           {/* Right section: Customer details */}
//           <div className="w-full lg:w-auto">
//             <CustomerInfo
//               customer={customer}
//               bookingDetails={{
//                 bookedon,
//                 checkIn,
//                 checkOut,
//                 guestCount,
//                 roomCount,
//                 price
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailedBookingLayout;















// import HotelHeader from "../components/BookingHeader";
// import BookingTopBar from "../components/BookingTopBar";
// import CustomerInfo from "../components/CustomerInfo";
// import ImageGallery from "../components/ImageGallery";
// import TimingInfo from "../components/TimingInfo";

// const DetailedBookingLayout = ({ booking, type }) => {
//   if (!booking) {
//     return <div className="p-6 text-red-500">Booking not found</div>;
//   }

//   // Destructure booking details with defaults
//   const {
//     owner = {},
//     adventureName,
//     adventureId,
//     rating,
//     location,
//     images = [],
//     roomNo,
//     username,
//     email,
//     checkIn,
//     checkOut,
//     guests,
//     price,
//     status
//   } = booking;

//   return (
//     <div className="min-h-screen p-4 sm:p-6 md:p-10">
//       {/* Top bar with owner info */}
//       <BookingTopBar
//         name={owner.name}
//         phone={owner.phone}
//         status={status}
//         bookingId={adventureId}
//       />

//       {/* Main content container */}
//       <div className="bg-[#D6FFEA] rounded-b-lg shadow-lg pt-4 px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
        
//         {/* Adventure name, rating & location */}
//         <HotelHeader name={adventureName} rating={rating} location={location} />

//         {/* Two-column layout */}
//         <div className="flex flex-col lg:flex-row gap-6 mt-6">
          
//           {/* Left section: Gallery & Timing */}
//           <div className="w-full lg:w-2/3 space-y-6">
//             <ImageGallery images={images} />
//             <TimingInfo
//               roomNo={roomNo}
//               type={type}
//               checkIn={checkIn}
//               checkOut={checkOut}
//               guests={guests}
//             />
//           </div>

//           {/* Right section: Customer details */}
//           <div className="w-full lg:w-auto">
//             <CustomerInfo
//               customer={{
//                 name: username,
//                 email: email,
//               }}
//               bookingDetails={{
//                 bookingId: adventureId,
//                 checkIn,
//                 checkOut,
//                 guests,
//                 price,
//                 status
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailedBookingLayout;


















// import HotelHeader from "../components/BookingHeader";
// import BookingTopBar from "../components/BookingTopBar";
// import CustomerInfo from "../components/CustomerInfo";
// import ImageGallery from "../components/ImageGallery";
// import TimingInfo from "../components/TimingInfo";

// const DetailedBookingLayout = ({ booking, type }) => {
//   if (!booking) {
//     return <div className="p-6 text-red-500">Booking not found</div>;
//   }

//   const {
//     owner = {},
//     customer = {},
//     bookingId,
//     bookedOn,
//     name,
//     rating,
//     location,
//     images = [],
//     roomNo,
//     checkIn,
//     checkOut,
//     guestCount,
//     roomCount,
//     price,
//     status
//   } = booking;

//   return (
//     <div className="min-h-screen p-4 sm:p-6 md:p-10">
//       {/* Top bar with owner info */}
//       <BookingTopBar
//         name={owner.name}
//         phone={owner.phone}
//         photo={owner.photo}
//         status={status}
//         bookingId={bookingId}
//       />

//       {/* Main content container */}
//       <div className="bg-[#D6FFEA] rounded-b-lg shadow-lg pt-4 px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
//         {/* Adventure name, rating & location */}
//         <HotelHeader name={name} rating={rating} location={location} />

//         {/* Two-column layout */}
//         <div className="flex flex-col lg:flex-row gap-6 mt-6">
//           {/* Left section: Gallery & Timing */}
//           <div className="w-full lg:w-2/3 space-y-6">
//             <ImageGallery images={images} />

//             <TimingInfo
//               roomNo={roomNo}
//               type={type}
//               checkIn={checkIn}
//               checkOut={checkOut}
//               guests={guestCount}
//               roomCount={roomCount}
//             />
//           </div>

//           {/* Right section: Customer details */}
//           <div className="w-full lg:w-auto">
//             <CustomerInfo
//               customer={{
//                 name: customer.name,
//                 email: customer.email,
//                 phone: customer.phone,
//                 photo: customer.photo
//               }}
//               bookingDetails={{
//                 bookedOn,
//                 checkIn,
//                 checkOut,
//                 guestCount,
//                 roomCount,
//                 price,
//                 status
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailedBookingLayout;




















// import HotelHeader from "../components/BookingHeader"; 
// import BookingTopBar from "../components/BookingTopBar";
// import CustomerInfo from "../components/CustomerInfo";
// import ImageGallery from "../components/ImageGallery";
// import TimingInfo from "../components/TimingInfo";

// const DetailedBookingLayout = ({ booking, type }) => {
//   if (!booking) {
//     return <div className="p-6 text-red-500">Booking not found</div>;
//   }

//   const {
//     id,
//     adventureId,
//     adventureName,
//     username,
//     email,
//     checkIn,
//     checkOut,
//     price,
//     status,
//     guests,
//     owner = {},
//     images = [],
//     rating,
//     location,
//     roomNo,
//   } = booking;

//   // Map fields from mock server
//   const bookingId = id || adventureId;
//   const name = adventureName;
//   const guestCount = guests || 1;
//   const bookedOn = booking.bookedOn || "2023-06-10"; // fallback until added in mock
//   const roomCount = 1; // static for now
//   const coverImage = images[0] || "";

//   const customer = {
//     name: username || "Guest User",
//     email: email || "guest@example.com",
//     phone: booking.phone || "N/A",
//     photo: booking.photo || "",
//   };

//   return (
//     <div className="min-h-screen p-4 sm:p-6 md:p-10">
//       {/* Top bar with owner info */}
//       <BookingTopBar
//         name={owner.name}
//         phone={owner.phone}
//         photo={coverImage}
//         status={status}
//         bookingId={bookingId}
//       />

//       {/* Main content container */}
//       <div className="bg-[#D6FFEA] rounded-b-lg shadow-lg pt-4 px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
//         {/* Adventure name, rating & location */}
//         <HotelHeader name={name} rating={rating} location={location} />

//         {/* Two-column layout */}
//         <div className="flex flex-col lg:flex-row gap-6 mt-6">
//           {/* Left section: Gallery & Timing */}
//           <div className="w-full lg:w-2/3 space-y-6">
//             <ImageGallery images={images} />

//             <TimingInfo
//               roomNo={roomNo}
//               type={type}
//               checkIn={checkIn}
//               checkOut={checkOut}
//               guests={guestCount}
//               roomCount={roomCount}
//             />
//           </div>

//           {/* Right section: Customer details */}
//           <div className="w-full lg:w-auto">
//             <CustomerInfo
//               customer={customer}
//               bookingDetails={{
//                 bookedOn,
//                 checkIn,
//                 checkOut,
//                 guestCount,
//                 roomCount,
//                 price,
//                 status,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailedBookingLayout;








































import HotelHeader from "../components/BookingHeader";
import BookingTopBar from "../components/BookingTopBar";
import CustomerInfo from "../components/CustomerInfo";
import ImageGallery from "../components/ImageGallery";
import TimingInfo from "../components/TimingInfo";

const DetailedBookingLayout = ({ booking, type }) => {
  if (!booking) {
    return <div className="p-6 text-red-500">Booking not found</div>;
  }

  // --- Normalize fields from both data structures ---
  const {
    id,
    adventureId,
    adventureName,
    username,
    email,
    checkIn,
    checkOut,
    price,
    status,
    guests,
    owner = {},
    images = [],
    rating,
    location,
    roomNo,
    bookingId: rawBookingId,
    name: rawName,
    bookedOn: rawBookedOn,
    customer: rawCustomer = {},
    phone,
    photo
  } = booking;

  // Standardized booking fields
  const bookingId = rawBookingId || id || adventureId;
  const name = rawName || adventureName || "Untitled Booking";
  const guestCount = guests || booking.guestCount || 1;
  const bookedOn = rawBookedOn || booking.bookedOn || "2023-06-10";
  const roomCount = booking.roomCount || 1;
  const coverImage = images[0] || "";

  // Standardized customer object
  const customer = {
    name: rawCustomer.name || username || "Guest User",
    email: rawCustomer.email || email || "guest@example.com",
    phone: rawCustomer.phone || phone || "N/A",
    photo: rawCustomer.photo || photo || "",
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10">
      {/* Top bar with owner info */}
      <BookingTopBar
        name={owner.name}
        phone={owner.phone}
        photo={owner.photo || coverImage}
        status={status}
        bookingId={bookingId}
      />

      {/* Main content container */}
      <div className="bg-[#D6FFEA] rounded-b-lg shadow-lg pt-4 px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
        {/* Adventure/Hotel name, rating & location */}
        <HotelHeader name={name} rating={rating} location={location} />

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Left section: Gallery & Timing */}
          <div className="w-full lg:w-2/3 space-y-6">
            <ImageGallery images={images} />

            <TimingInfo
              roomNo={roomNo}
              type={type}
              checkIn={checkIn}
              checkOut={checkOut}
              guests={guestCount}
              roomCount={roomCount}
            />
          </div>

          {/* Right section: Customer details */}
          <div className="w-full lg:w-auto">
            <CustomerInfo
              customer={customer}
              bookingDetails={{
                bookedOn,
                checkIn,
                checkOut,
                guestCount,
                roomCount,
                price,
                status,
              }}
              type={type}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedBookingLayout;
