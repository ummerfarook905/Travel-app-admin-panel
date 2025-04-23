import StatsCard from "../components/StatsCard";
import { FiUsers, FiMapPin, FiHome, FiActivity } from "react-icons/fi";
import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";

export default function Dashboard() {
  const stats = [
    { title: "Users", value: "932", icon: <FiUsers className="text-2xl" /> },
    { title: "Destinations", value: "754", icon: <FiMapPin className="text-2xl" /> },
    { title: "Hotels", value: "40", icon: <FaHotel className="text-2xl" /> },
    { title: "Adventures", value: "32K", icon: <FaUmbrellaBeach className="text-2xl" /> },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </>
  );
}