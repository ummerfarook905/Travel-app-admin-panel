const AdventureHeader = ({ coverImage, profileImage, title }) => (
  <div className="w-full max-w-[1380px] mx-auto">
    {/* Background Cover Image */}
<div className="relative w-full h-[60px] sm:h-[80px] md:h-[100px] bg-[#00493E] rounded-md overflow-hidden">
      {/* {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      )} */}
    </div>

    {/* Profile Image and Title - with increased overlap */}
    <div className="relative flex flex-col items-start -mt-8 sm:-mt-12 md:-mt-16 ml-2 sm:ml-4 md:ml-8">
      <img
        src={profileImage}
        alt={title}
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-[180px] md:h-[120px] rounded-full object-cover shadow-md border-4 border-white"
      />
      <h1 className="mt-2 text-[#303972] text-base sm:text-xl md:text-3xl font-bold">
        {title}
      </h1>
    </div>
  </div>
);

export default AdventureHeader;