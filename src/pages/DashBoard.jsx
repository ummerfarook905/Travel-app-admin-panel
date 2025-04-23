import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  const stats = [
    { title: "Users", value: "932", icon: "👥" },
    { title: "Destinations", value: "754", icon: "🔒" },
    { title: "Hotels", value: "40", icon: "🔒" },
    { title: "Adventures", value: "32K", icon: "🔒" },

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