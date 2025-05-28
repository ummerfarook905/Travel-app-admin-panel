// React Router & Redux hooks
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DetailedPendingLayout from "../Layouts/DetailedPendingLayout";

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
<DetailedPendingLayout
      headerProps={{
        coverImage: adventure.coverImage,
        profileImage: adventure.coverImage,
        title: adventure.name,
      }}
      infoItems={infoItems}
      description={adventure.description}
      price={adventure.price}
      mapImage={adventure.mapImage}
      galleryImages={galleryImages}
      onApprove={handleApprove}
      onReject={handleReject}
    />
  );
};

export default DetailedPending_Adventures;
