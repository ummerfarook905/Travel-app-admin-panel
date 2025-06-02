const CustomerInfo = ({ customer, bookingDetails, type }) => {
  return (
    <div className="bg-[#003f2f] text-white p-5 rounded-xl w-full h-fit"
    style={{ marginTop: window.innerWidth >= 1024 ? "-25px" : "10px" }}>
      {/* Customer Profile Section */}
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={customer.photo}
          alt="Customer"
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h4 className="text-lg font-bold">{customer.name}</h4>
          <p className="text-sm">{customer.email}</p>
          <p className="text-sm">{customer.phone}</p>
        </div>
      </div>

      {/* Booking Details Section */}
      <div className="space-y-4 text-sm px-2">
        <p>
          <strong>Booked on:</strong> {bookingDetails.bookedOn}
        </p>
        <p>
          <strong>Check In Date:</strong> {bookingDetails.checkIn}
        </p>
        <p>
          <strong>Check Out Date:</strong> {bookingDetails.checkOut}
        </p>
        <p>
          <strong>Guest:</strong> {bookingDetails.guestCount}
        </p>
        {type !== "adventure" && (
          <p>
            <strong>Room:</strong> {bookingDetails.roomCount}
          </p>
        )}
        <p>
          <strong>Price:</strong> ₹ {bookingDetails.price}
        </p>
      </div>
    </div>
  );
};

export default CustomerInfo;
