// components/DetailedPendingLayout.jsx
// Custom UI components
import AdventureHeader from "../components/AdventureHeader";
import InfoGrid from "../components/InfoGrid";
import ImageGallery from "../components/ImageGallery";
import ActionButtons from "../components/ActionButtons";
import SectionTitle from "../components/SectionTitle";
import useGeocode from "../hooks/useGeoCode";
import LocationMap from "../components/LocationMap";
const DetailedPendingLayout = ({
  headerProps,
  infoItems,
  description,
  price,
  mapImage,
  location="New York, USA",
  galleryImages,
  onApprove,
  onReject,
}) => {
  const coordinates =useGeocode(location);
  console.log("Coordinates in DetailedPendingLayout:", coordinates);
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* Header */}
        <AdventureHeader {...headerProps} />

        <div className="p-4 md:p-6 space-y-8">
          <InfoGrid items={infoItems} />

          {/* Description and price */}
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

          {/* Map and gallery */}
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="md:w-1/3">
             <LocationMap coordinates={coordinates} location={location} />

            </div>
            <div className="md:w-2/3">
              <SectionTitle>Images</SectionTitle>
              <ImageGallery images={galleryImages} />
            </div>
          </div>

          <ActionButtons onReject={onReject} onApprove={onApprove} />
        </div>
      </div>
    </div>
  );
};

export default DetailedPendingLayout;
