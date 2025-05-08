import React from "react";

const AdventureBookingHeader = ({ title, ownerName, ownerPhone, ownerImage }) => (
  <div className="bg-[#004d40] text-white px-6 py-3 rounded-t-xl flex justify-between items-center">
    
    {/* Left - Title and Owner Info with Image */}
    <div className="flex items-center gap-4">
      <img
        src={ownerImage}
        alt="Owner Profile"
        className="w-10 h-10 rounded-full object-cover border border-white"
      />
      <div>
        {/* <h2 className="text-lg font-semibold">{title}</h2> */}
        <p className="text-sm text-gray-100">{ownerName}</p>
      </div>
    </div>

    {/* Right - Phone Number */}
    <div className="text-sm text-right">
      <p className="text-gray-200">{ownerPhone}</p>
    </div>
  </div>
);

export default AdventureBookingHeader;
