// components/DetailedVerifiedLayout.jsx
import AdventureHeader from "../components/AdventureHeader";
import InfoGrid from "../components/InfoGrid";
import ImageGallery from "../components/ImageGallery";
import SectionTitle from "../components/SectionTitle";
import Rating from "../components/ReviewList";
import LocationMap from "../components/LocationMap";
import useGeocode from "../hooks/useGeoCode";
const DetailedVerifiedLayout = ({
  title,
  description,
  coverImage,
  profileImage,
  price,
  infoItems,
  galleryImages,
  mapImage,
  // coordinates,
  location,
  handleEdit,
  handleDelete,
}) => {
   const coordinates = useGeocode(location); 
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <AdventureHeader
          coverImage={coverImage}
          profileImage={profileImage}
          title={title}
        />

        <div className="flex justify-end space-x-4 px-6" style={{ marginTop: "-30px" }}>
          <button
            onClick={handleDelete}
            className="px-5 py-2 bg-emerald-800 text-white rounded-full hover:bg-emerald-900 transition-colors cursor-pointer"
          >
            Delete
          </button>

          <button
            onClick={handleEdit}
            className="px-5 py-2 bg-emerald-800 text-white rounded-full hover:bg-emerald-900 transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>

        <div className="p-4 md:p-6 space-y-8">
          <InfoGrid items={infoItems} />

          {/* About & Price */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1 max-w-full md:max-w-[70%] min-w-0">
              <SectionTitle>About:</SectionTitle>
              <p className="text-sm md:text-base mt-2 leading-relaxed text-justify text-[#303972]">
                {description}
              </p>
            </div>
            <div className="shrink-0 md:ml-6 mt-2 md:mt-7">
              <div className="bg-[#00493E] text-white rounded-lg px-6 py-3 flex flex-col items-center shadow">
                <span className="text-lg font-bold">${price}</span>
                <span className="text-sm opacity-90">/Night</span>
              </div>
            </div>
          </div>

          {/* Map & Gallery */}
          <div>
            <SectionTitle>Location & Gallery</SectionTitle>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div className="md:w-1/3">
<LocationMap coordinates={coordinates} location={location} />
              </div>
              <div className="md:w-2/3">
                <ImageGallery images={galleryImages} />
              </div>
            </div>
          </div>
        </div>

        <Rating />
      </div>
    </div>
  );
};

export default DetailedVerifiedLayout;
