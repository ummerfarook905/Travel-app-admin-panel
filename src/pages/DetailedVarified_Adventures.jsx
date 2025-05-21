import { useLocation, useParams, useNavigate } from "react-router-dom";
import AdventureHeader from "../components/AdventureHeader";
import InfoGrid from "../components/InfoGrid";
import ImageGallery from "../components/ImageGallery";
import ActionButtons from "../components/ActionButtons";
import SectionTitle from "../components/SectionTitle";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteAdventure } from "../redux/adventuresSlice";
import Rating from "../components/ReviewList";

const DetailedVerified_Adventures = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adventure, setAdventure] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state?.adventure) {
      setAdventure(state.adventure);
      setLoading(false);
    } else {
      fetchAdventure();
    }
  }, [id, state]);

  const fetchAdventure = async () => {
    try {
      const response = await fetch(`/api/adventures/${id.replace('#', '')}`);
      const data = await response.json();
      setAdventure(data);
    } catch (error) {
      console.error("Error fetching adventure:", error);
      toast.error("Failed to load adventure details");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-adventure/${id.replace('#', '')}`, {
      state: { adventure }
    });
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to permanently delete "${adventure.name}"?`)) {
      try {
        await dispatch(deleteAdventure({ id })).unwrap();
        toast.success("Adventure deleted successfully");
        navigate('/verified-adventures');
      } catch (error) {
        console.error("Error deleting adventure:", error);
        toast.error(error.message || "Failed to delete adventure");
      }
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-600">
        Loading adventure details...
      </div>
    );
  }

  if (!adventure) {
    return (
      <div className="p-8 text-center text-gray-600">
        Could not load adventure details.
      </div>
    );
  }

  const infoItems = [
    { icon: <GrLocation />, text: adventure.location },
    { icon: <IoCallOutline />, text: adventure.phone },
    { icon: <MdMailOutline />, text: adventure.email },
    { icon: <FiUser />, text: adventure.username },
  ];

  const galleryImages = adventure.images?.map((img, index) => ({
    url: img || `https://source.unsplash.com/random/300x300/?adventure,${index}`,
    alt: `Adventure view ${index + 1}`,
  })) || [];

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <AdventureHeader
          coverImage={adventure.coverImage || 'https://source.unsplash.com/random/800x400/?adventure'}
          profileImage={adventure.coverImage || 'https://source.unsplash.com/random/300x300/?profile'}
          title={adventure.name}
        />

        <div className="p-4 md:p-6 space-y-8">
          <InfoGrid items={infoItems} />
          <div className="flex justify-end space-x-4">
            {/* buttons*/}
            <button
              onClick={handleDelete}
              className="px-5 py-2 bg-emerald-800 text-white rounded-full hover:bg-emerald-900 transition-colors"
            >
              Delete 
            </button>

            <button
              onClick={handleEdit}
              className="px-5 py-2 bg-emerald-800 text-white rounded-full hover:bg-emerald-900 transition-colors"
            >
              Edit 
            </button>
          </div>
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

          <div>
            <SectionTitle>Location & Gallery</SectionTitle>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden h-48 md:h-64 shadow-md">
                  <img
                    src={adventure.mapImage || 'https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=terrain&markers=color:red&key=YOUR_API_KEY'}
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


        </div>
        <Rating />
      </div>
    </div>
  );
};

export default DetailedVerified_Adventures;