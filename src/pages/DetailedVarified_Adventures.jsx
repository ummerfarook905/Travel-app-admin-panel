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

const DetailedVarified_Adventures = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [adventure, setAdventure] = useState(null);
  const [loading, setLoading] = useState(true);

  // First try to get adventure from location state
  useEffect(() => {
    if (state?.adventure) {
      setAdventure(state.adventure);
      setLoading(false);
    } else {
      // If no state, fetch from API using the id
      fetchAdventure();
    }
  }, [id, state]);

  const fetchAdventure = async () => {
    try {
      // Replace with your actual API endpoint
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

  const handleReject = async () => {
    try {
      // API call to reject adventure
      await fetch(`/api/adventures/${id}/reject`, {
        method: 'POST'
      });
      toast.success("Adventure rejected successfully");
      navigate('/pending-adventures');
    } catch (error) {
      console.error("Error rejecting adventure:", error);
      toast.error("Failed to reject adventure");
    }
  };

  const handleApprove = async () => {
    try {
      // API call to approve adventure
      await fetch(`/api/adventures/${id}/approve`, {
        method: 'POST'
      });
      toast.success("Adventure approved successfully");
      navigate('/verified-adventures', {
        state: { message: `Adventure ${id} approved!` }
      });
    } catch (error) {
      console.error("Error approving adventure:", error);
      toast.error("Failed to approve adventure");
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

          <ActionButtons 
            onReject={handleReject} 
            onApprove={handleApprove} 
            showApprove={!adventure.status || adventure.status === 'pending'}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedVarified_Adventures;