

// React Router & Redux hooks
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DetailedPendingLayout from "../Layouts/DetailedPendingLayout";


  import { ADVENTURE_IMAGES } from "../Constants/images"; // adjust the path if needed

// Icons
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

// Redux actions
import { approveAdventure, rejectAdventure } from "../redux/adventuresSlice";

const DetailedPending_Adventures = () => {
  const { state } = useLocation();
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

  // Safe image fallback for gallery
  // const galleryImages = Array.isArray(adventure.images) && adventure.images.length > 0
  //   ? adventure.images.map((img, index) => ({
  //       url: img?.startsWith('http') ? img : '/default-image.jpg',
  //       alt: `Adventure view ${index + 1}`
  //     }))
  //   : [
  //       {
  //         url: '/default-image.jpg',
  //         alt: 'Fallback adventure view'
  //       }
  //     ];


const galleryImages = adventure.images?.length
  ? adventure.images
  : (adventure.imageKeys || [adventure.imageKey]).map(
      (key) => ADVENTURE_IMAGES[key] || '/default-image.jpg'
    );




  return (
    <DetailedPendingLayout
      headerProps={{
        coverImage:
          adventure.coverImage?.startsWith('http') || adventure.coverImage?.startsWith('/')
            ? adventure.coverImage
            : '/default-cover.jpg',
        profileImage:
          adventure.coverImage?.startsWith('http') || adventure.coverImage?.startsWith('/')
            ? adventure.coverImage
            : '/default-profile.png',
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


