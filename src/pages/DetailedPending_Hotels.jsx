import { useLocation, useParams, useNavigate } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteAdventure } from "../redux/adventuresSlice";
import DetailedVerifiedLayout from "../Layouts/DetailedVerifiedLayout";

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
      const response = await fetch(`/api/adventures/${id.replace("#", "")}`);
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
    navigate(`/edit-adventure/${id.replace("#", "")}`, {
      state: { adventure },
    });
  };

  const handleDelete = async () => {
    if (
      window.confirm(
        `Are you sure you want to permanently delete "${adventure.name}"?`
      )
    ) {
      try {
        await dispatch(deleteAdventure({ id })).unwrap();
        toast.success("Adventure deleted successfully");
        navigate("/verified-adventures");
      } catch (error) {
        console.error("Error deleting adventure:", error);
        toast.error(error.message || "Failed to delete adventure");
      }
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-600">Loading adventure details...</div>;
  }

  if (!adventure) {
    return <div className="p-8 text-center text-gray-600">Could not load adventure details.</div>;
  }

  const infoItems = [
    { icon: <GrLocation />, text: adventure.location },
    { icon: <IoCallOutline />, text: adventure.phone },
    { icon: <MdMailOutline />, text: adventure.email },
    { icon: <FiUser />, text: adventure.username },
  ];

  const galleryImages =
    adventure.images?.map((img, index) => ({
      url: img || `https://source.unsplash.com/random/300x300/?adventure,${index}`,
      alt: `Adventure view ${index + 1}`,
    })) || [];

  return (
    <DetailedVerifiedLayout
      title={adventure.name}
      description={adventure.description}
      coverImage={adventure.coverImage || 'https://source.unsplash.com/random/800x400/?adventure'}
      profileImage={adventure.coverImage || 'https://source.unsplash.com/random/300x300/?profile'}
      price={adventure.price}
      infoItems={infoItems}
      galleryImages={galleryImages}
    //  mapImage={adventure.mapImage || 'https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=terrain&markers=color:red&key=YOUR_API_KEY'}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
        location= {adventure.location}
    />
  );
};

export default DetailedVerified_Adventures;
