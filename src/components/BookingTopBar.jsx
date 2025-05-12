const BookingTopBar = ({ name, phone }) => {
  return (
    <div className="bg-[#003f2f] text-white flex justify-between items-center px-6 py-4 rounded-t-lg">
      <div className="flex items-center space-x-3">
        <span className="font-semibold">{name}</span>
      </div>
      <span className="text-sm">{phone}</span>
    </div>
  );
};

export default BookingTopBar;