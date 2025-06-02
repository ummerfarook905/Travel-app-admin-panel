import { FaClock } from "react-icons/fa";

const TimingInfo = ({ roomNo, type }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 lg:gap-[7.5rem] text-sm text-gray-700 mt-6">
      <div className="flex flex-col items-center w-full sm:w-32">
        <FaClock className="text-blue-500 mb-1" />
        <span>Check-Out Time</span>
        <strong>11:30am</strong>
      </div>
      <div className="flex flex-col items-center w-full sm:w-32">
        <FaClock className="text-green-500 mb-1" />
        <span>Check-In Time</span>
        <strong>12:00pm</strong>
      </div>
      {type !== "adventure" && (
        <div className="flex flex-col items-center w-full sm:w-32">
          <FaClock className="text-purple-500 mb-1" />
          <span>Room No.</span>
          <strong>{roomNo}</strong>
        </div>
      )}
    </div>
  );
};

export default TimingInfo;
