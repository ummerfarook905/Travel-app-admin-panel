// Updated DetailedVerified_Hotels.js
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteHotel } from "../redux/hotelsSlice";
import DetailedVerifiedLayout from "../Layouts/DetailedVerifiedLayout";
import useConfirmDialog from "../hooks/useConfirmDialog";
import ConfirmationDialog from "../components/ConfirmationDialog";
import { deleteHotelAsync } from "../redux/hotelsSlice";
import { useDispatch } from "react-redux";
const DetailedVerified_Hotels = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    isOpen,
    openDialog,
    closeDialog,
    confirm,
    payload
  } = useConfirmDialog();

  useEffect(() => {
    if (state?.hotel) {
      setHotel(state.hotel);
      setLoading(false);
    } else {
      fetchHotel();
    }
  }, [id, state]);

  const fetchHotel = async () => {
    try {
      const response = await fetch(`/api/hotels/${id.replace('#', '')}`);
      const data = await response.json();
      setHotel(data);
    } catch (error) {
      console.error("Error fetching hotel:", error);
      toast.error("Failed to load hotel details");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    navigate(`/edit-hotel/${id.replace('#', '')}`, {
      state: { hotel }
    });
  };

  const handleDelete = async (id) => {
  const confirmed = window.confirm("Are you sure you want to delete?");
  if (confirmed) {
    dispatch(deleteHotelAsync({ id }));
  }
};

   const handleConfirmDelete = async (hotelToDelete) => {
    try {
      await dispatch(deleteHotel({ id })).unwrap();
      toast.success(`Hotel "${hotelToDelete.name}" deleted successfully`);
      navigate('/verified-hotels');
    } catch (error) {
      console.error("Error deleting hotel:", error);
      toast.error(error.message || "Failed to delete hotel");
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-600">
        Loading hotel details...
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="p-8 text-center text-gray-600">
        Could not load hotel details.
      </div>
    );
  }

  const infoItems = [
    { icon: <GrLocation />, text: hotel.location },
    { icon: <IoCallOutline />, text: hotel.phone },
    { icon: <MdMailOutline />, text: hotel.email },
    { icon: <FiUser />, text: hotel.username },
  ];


  const galleryImages = hotel.images?.map((img, index) => ({
    url: img || `https://source.unsplash.com/random/300x300/?hotel,${index}`,
    alt: `Hotel view ${index + 1}`,
  })) || [];

  return (
    <div>
        <DetailedVerifiedLayout
      title={hotel.name}
      description={hotel.description}
      coverImage={hotel.coverImage || 'https://source.unsplash.com/random/800x400/?adventure'}
      profileImage={hotel.coverImage || 'https://source.unsplash.com/random/300x300/?profile'}
      price={hotel.price}
      infoItems={infoItems}
      galleryImages={galleryImages}
    //  mapImage={hotel.mapImage || 'https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=terrain&markers=color:red&key=YOUR_API_KEY'}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      location={hotel.location}
    />
  


 /*  Confirmation dialog using hook */
      {isOpen && (
        <ConfirmationDialog
          message={`Do you really want to delete "${payload?.name}"?`}
          onCancel={closeDialog}
          onConfirm={confirm}
        />
      )}
        </div>
  )

};

export default DetailedVerified_Hotels;