import { useLocation, useParams } from "react-router-dom";
import AdventureHeader from "../components/AdventureHeader";
import InfoGrid from "../components/InfoGrid";
import ImageGallery from "../components/ImageGallery";
import ActionButtons from "../components/ActionButtons";
import SectionTitle from "../components/SectionTitle";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const DetailedPending_Adventures = () => {
  const { state } = useLocation();
  const { id } = useParams();

  if (!state?.adventure) {
    return (
      <div className="p-8 text-center text-gray-600">
        Could not load adventure details.
      </div>
    );
  }

  const adventure = state.adventure;

  const handleReject = () => {
    console.log("Rejecting adventure:", id);
  };

  const handleApprove = () => {
    console.log("Approving adventure:", id);
  };

  const infoItems = [
    { icon: <GrLocation />, text: adventure.location },
    { icon: <IoCallOutline />, text: adventure.phone },
    { icon: <MdMailOutline />, text: adventure.email },
    { icon: <FiUser />, text: adventure.username },
  ];

  const galleryImages = adventure.images.map((img, index) => ({
    url: img || `https://source.unsplash.com/random/300x300/?adventure,${index}`,
    alt: `Adventure view ${index + 1}`,
  }));

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <AdventureHeader
          coverImage={adventure.coverImage}
          profileImage={adventure.coverImage}
          title={adventure.name}
        />

        <div className="p-4 md:p-6 space-y-8">
          <InfoGrid items={infoItems} />

          {/* About + Price in one line */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
  <div className="flex-1 min-w-0">
    <SectionTitle>About This Adventure</SectionTitle>
    <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed text-justify">
      {adventure.description}
    </p>
  </div>
  <div className="shrink-0 md:ml-6 mt-2 md:mt-7">
    <div className="bg-[#00493E] text-white rounded-lg px-6 py-3 flex items-center shadow">
      <span className="text-lg font-bold">${adventure.price}</span>
      <span className="ml-2 text-sm opacity-90">/ person</span>
    </div>
  </div>
</div>


          {/* Location & Gallery */}
          <div>
            <SectionTitle>Location & Gallery</SectionTitle>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden h-48 md:h-64 shadow-md">
                  <img
                    src={adventure.mapImage}
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <ImageGallery images={galleryImages} />
              </div>
            </div>
          </div>

          <ActionButtons onReject={handleReject} onApprove={handleApprove} />
        </div>
      </div>
    </div>
  );
};

export default DetailedPending_Adventures;
