export default function StatsCard({ title, value, icon }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-[#00493E]">{value}</p>
          </div>
          <span className="text-3xl">{icon}</span>
        </div>
      </div>
    );
  }