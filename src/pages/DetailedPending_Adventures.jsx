// React Router & Redux hooks
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Custom UI components
import AdventureHeader from "../components/AdventureHeader";
import InfoGrid from "../components/InfoGrid";
import ImageGallery from "../components/ImageGallery";
import ActionButtons from "../components/ActionButtons";
import SectionTitle from "../components/SectionTitle";

// Icons
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

// Redux actions
import { approveAdventure, rejectAdventure } from "../redux/adventuresSlice";

const DetailedPending_Adventures = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle missing data gracefully
  if (!state?.adventure) {
    return (
      <div className="p-8 text-center text-gray-600">
        Could not load adventure details.
      </div>
    );
  }

  const adventure = state.adventure;

  // Approve adventure handler
  const handleApprove = () => {
    dispatch(approveAdventure({ id: adventure.id }));
    navigate('/verified-adventures', {
      state: { message: `Adventure ${adventure.id} approved successfully!` }
    });
  };

  // Reject adventure handler
  const handleReject = () => {
    dispatch(rejectAdventure({ id: adventure.id }));
    navigate('/pending-adventures', {
      state: { message: `Adventure ${adventure.id} rejected successfully!` }
    });
  };

  // Info grid items
  const infoItems = [
    { icon: <GrLocation />, text: adventure.location },
    { icon: <IoCallOutline />, text: adventure.phone },
    { icon: <MdMailOutline />, text: adventure.email },
    { icon: <FiUser />, text: adventure.username },
  ];

  // Image gallery setup
  const galleryImages = adventure.images.map((img, index) => ({
    url: img || `https://source.unsplash.com/random/300x300/?adventure,${index}`,
    alt: `Adventure view ${index + 1}`,
  }));

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* Header: Title, cover & profile image */}
        <AdventureHeader
          coverImage={adventure.coverImage}
          profileImage={adventure.coverImage}
          title={adventure.name}
        />

        <div className="p-4 md:p-6 space-y-8">
          {/* Info grid: Location, Contact, User */}
          <InfoGrid items={infoItems} />

          {/* About and Price section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1 max-w-full md:max-w-[70%] min-w-0">
              <SectionTitle>About:</SectionTitle>
              <p className="text-sm md:text-base mt-2 leading-relaxed text-justify text-[#303972]">
                {adventure.description}
              </p>
            </div>
            <div className="shrink-0 md:ml-6 mt-2 md:mt-7">
              <div className="bg-[#00493E] text-white rounded-lg px-6 py-3 flex flex-col items-center shadow">
                <span className="text-lg font-bold">${adventure.price}</span>
                <span className="text-sm opacity-90">/Night</span>
              </div>
            </div>
          </div>

          {/* Map and image gallery */}
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden h-38 md:h-54 shadow-md">
                <img
                  src={adventure.mapImage}
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <SectionTitle>Images</SectionTitle>
              <ImageGallery images={galleryImages} />
            </div>
          </div>

          {/* Action buttons: Approve or Reject */}
          <ActionButtons onReject={handleReject} onApprove={handleApprove} />
        </div>
      </div>
    </div>
  );
};

export default DetailedPending_Adventures;
