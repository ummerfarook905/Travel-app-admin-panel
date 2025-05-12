const CustomerInfo = ({ customer, bookingDetails }) => {
  return (
    <div className="bg-[#003f2f] text-white p-5 rounded-xl w-full lg:w-1/3 h-fit">
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={customer.photo}
          alt="Customer"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="text-lg font-bold">{customer.name}</h4>
          <p className="text-sm">{customer.email}</p>
          <p className="text-sm">{customer.phone}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
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
        <p>
          <strong>Room:</strong> {bookingDetails.roomCount}
        </p>
        <p>
          <strong>Price:</strong> ₹ {bookingDetails.price}
        </p>
      </div>
    </div>
  );
};

export default CustomerInfo;