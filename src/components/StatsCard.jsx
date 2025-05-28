// eslint-disable-next-line no-unused-vars
export default function StatsCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold text-[#00493E]">{value}</p>
        </div>
        <div className="p-3 rounded-full bg-[#E6F2F0] text-[#00493E]">
          <Icon className="text-2xl" />
        </div>
      </div>
    </div>
  );
}