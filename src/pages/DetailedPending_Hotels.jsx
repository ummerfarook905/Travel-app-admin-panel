// src/pages/DetailedPending_Hotels.js
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdventureHeader from "../components/AdventureHeader";
import InfoGrid from "../components/InfoGrid";
import ImageGallery from "../components/ImageGallery";
import ActionButtons from "../components/ActionButtons";
import SectionTitle from "../components/SectionTitle";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaBed, FaStar, FaWifi, FaSwimmingPool, FaUtensils, FaParking } from "react-icons/fa";
import { approveHotel, rejectHotel } from "../redux/hotelsSlice";
import { useNavigate } from "react-router-dom";

const DetailedPending_Hotels = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!state?.hotel) {
    return (
      <div className="p-8 text-center text-gray-600">
        Could not load hotel details.
      </div>
    );
  }

  const hotel = state.hotel;

  const handleReject = () => {
    dispatch(rejectHotel({ id: hotel.id }));
    navigate('/pending-hotels', {
      state: { message: `Hotel ${hotel.id} rejected successfully!` }
    });
  };

  const handleApprove = () => {
    dispatch(approveHotel({ id: hotel.id }));
    navigate('/verified-hotels', {
      state: { message: `Hotel ${hotel.id} approved successfully!` }
    });
  };

  const infoItems = [
    { icon: <GrLocation />, text: hotel.location },
    { icon: <IoCallOutline />, text: hotel.phone },
    { icon: <MdMailOutline />, text: hotel.email },
    { icon: <FiUser />, text: hotel.username },
    { icon: <FaBed />, text: `${hotel.rooms} rooms available` },
    { icon: <FaStar />, text: `Rating: ${hotel.rating}/5` },
  ];

  const amenityIcons = {
    'Pool': <FaSwimmingPool className="text-blue-500" />,
    'Free WiFi': <FaWifi className="text-green-500" />,
    'Restaurant': <FaUtensils className="text-red-500" />,
    'Parking': <FaParking className="text-gray-500" />,
    // Add more amenities as needed
  };

  const galleryImages = hotel.images.map((img, index) => ({
    url: img || `https://source.unsplash.com/random/300x300/?hotel,${index}`,
    alt: `Hotel view ${index + 1}`,
  }));

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <AdventureHeader
          coverImage={hotel.coverImage}
          profileImage={hotel.coverImage}
          title={hotel.name}
        />

        <div className="p-4 md:p-6 space-y-8">
          <InfoGrid items={infoItems} />

          {/* About + Price in one line */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1 min-w-0">
              <SectionTitle>About This Hotel</SectionTitle>
              <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed text-justify">
                {hotel.description}
              </p>

              {/* Amenities Section */}
              <div className="mt-6">
                <SectionTitle>Amenities</SectionTitle>
                <div className="flex flex-wrap gap-4 mt-3">
                  {hotel.amenities?.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                      {amenityIcons[amenity] || <FaWifi />}
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="shrink-0 md:ml-6 mt-2 md:mt-7">
              <div className="bg-[#00493E] text-white rounded-lg px-6 py-3 flex items-center shadow">
                <span className="text-lg font-bold">${hotel.price}</span>
                <span className="ml-2 text-sm opacity-90">/ night</span>
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
                    src={hotel.mapImage}
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

export default DetailedPending_Hotels;