import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DetailedPendingLayout from "../Layouts/DetailedPendingLayout";

// Icons
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

// Redux actions
import { approveHotel, rejectHotel } from "../redux/hotelsSlice";

const DetailedPending_Hotels = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle missing data
  if (!state?.hotel) {
    return (
      <div className="p-8 text-center text-gray-600">
        Could not load hotel details.
      </div>
    );
  }

  const hotel = state.hotel;

  // Approve handler
  const handleApprove = () => {
    dispatch(approveHotel({ id: hotel.id }));
    navigate("/verified-hotels", {
      state: { message: `Hotel ${hotel.name} approved successfully!` },
    });
  };

  // Reject handler
  const handleReject = () => {
    dispatch(rejectHotel({ id: hotel.id }));
    navigate("/pending-hotels", {
      state: { message: `Hotel ${hotel.name} rejected successfully.` },
    });
  };

  // Info grid setup
  const infoItems = [
    { icon: <GrLocation />, text: hotel.location },
    { icon: <IoCallOutline />, text: hotel.phone },
    { icon: <MdMailOutline />, text: hotel.email },
    { icon: <FiUser />, text: hotel.username },
  ];

  // Image gallery
  const galleryImages = hotel.images.map((img, index) => ({
    url: img || `https://source.unsplash.com/random/300x300/?hotel,${index}`,
    alt: `Hotel image ${index + 1}`,
  }));

  return (
    <DetailedPendingLayout
      headerProps={{
        coverImage: hotel.coverImage,
        profileImage: hotel.coverImage,
        title: hotel.name,
      }}
      infoItems={infoItems}
      description={hotel.description}
      price={hotel.price}
      mapImage={hotel.mapImage}
      galleryImages={galleryImages}
      onApprove={handleApprove}
      onReject={handleReject}
    />
  );
};

export default DetailedPending_Hotels;
