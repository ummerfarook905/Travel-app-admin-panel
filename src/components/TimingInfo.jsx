import { FaClock } from "react-icons/fa";

const TimingInfo = ({ roomNo }) => {
  return (
    <div className="flex text-sm text-gray-700 mt-6 gap-30 justify-center">
      <div className="flex flex-col items-center">
        <FaClock className="text-blue-500 mb-1" />
        <span>Check-Out Time</span>
        <strong>11:30am</strong>
      </div>
      <div className="flex flex-col items-center">
        <FaClock className="text-green-500 mb-1" />
        <span>Check-In Time</span>
        <strong>12:00pm</strong>
      </div>
      <div className="flex flex-col items-center">
        <FaClock className="text-purple-500 mb-1" />
        <span>Room No.</span>
        <strong>{roomNo}</strong>
      </div>
    </div>
  );
};

export default TimingInfo;