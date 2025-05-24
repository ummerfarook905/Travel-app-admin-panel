const BookingTopBar = ({ name, phone, photo }) => {  // Added `photo` prop
  return (
    <div className="bg-[#003f2f] text-white flex justify-between items-center px-6 py-4 rounded-t-lg">
      {/* Left side: User Image & Name */}
      <div className="flex items-center space-x-3">
        <img
          src={photo || "/default-avatar.png"}  // Fallback if photo is missing
          alt="Customer"
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
        <span className="font-semibold">{name}</span>
      </div>

      {/* Right side: Phone */}
      <span className="text-sm">{phone}</span>
    </div>
  );
};

export default BookingTopBar;