import { useState, useEffect } from "react";
import { FiUsers, FiMapPin } from "react-icons/fi";
import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";

const staticData = [
  { title: "Users", value: "932", iconKey: "FiUsers" },
  { title: "Destinations", value: "754", iconKey: "FiMapPin" },
  { title: "Hotels", value: "40", iconKey: "FaHotel" },
  { title: "Adventures", value: "32K", iconKey: "FaUmbrellaBeach" },
];


export default function useStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    setStats(staticData);
  }, []);

  return stats;
}
