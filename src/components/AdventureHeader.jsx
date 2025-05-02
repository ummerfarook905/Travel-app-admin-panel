const AdventureHeader = ({ coverImage, profileImage, title }) => (
    <div className="relative h-48 md:h-50 bg-gradient-to-r from-[#00493E] to-[#028476]">
      <img
        src={coverImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute bottom-4 left-4 flex items-end">
        <img
          src={profileImage}
          alt={title}
          className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
        <h1 className="ml-4 text-white text-xl md:text-3xl font-bold drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
  
  export default AdventureHeader;