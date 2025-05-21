const InfoItem = ({ icon, text }) => (
    <div className="flex items-center p-2 bg-gray-50 rounded-lg">
      <div className="mr-2 p-2 bg-orange-500 text-white rounded-full text-lg flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm md:text-base truncate text-[#303972]">{text}</span>
    </div>
  );
  
  
  const InfoGrid = ({ items }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {items.map((item, index) => (
        <InfoItem key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  );
  
  export default InfoGrid;