import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm"; // Reusing the same EditForm component
import { updateHotel } from '../redux/hotelsSlice';
import { useDispatch } from 'react-redux';

const EditHotel = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    control,
    setValue,
    watch
  } = useForm({
    defaultValues: state?.hotel || {}
  });

  const hotelFields = [
    // Left Column Fields
    { 
      name: 'name', 
      label: 'Hotel Name', 
      type: 'text', 
      placeholder: 'Enter hotel name', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'mapLink', 
      label: 'Location Map Link', 
      type: 'text', 
      placeholder: 'Enter map URL', 
      column: 'left' 
    },
    { 
      name: 'description', 
      label: 'Description', 
      type: 'textarea', 
      placeholder: 'Describe the hotel', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'pricePerNight', 
      label: 'Price per Night', 
      type: 'number', 
      placeholder: 'Enter nightly rate', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'roomsAvailable', 
      label: 'Rooms Available', 
      type: 'number', 
      placeholder: 'Enter number of rooms', 
      required: true, 
      column: 'left' 
    },
    { 
      name: 'checkInTime', 
      label: 'Check-in Time', 
      type: 'time', 
      defaultValue: '14:00', 
      required: true, 
      column: 'left' 
    },

    // Right Column Fields
    { 
      name: 'location', 
      label: 'Location', 
      type: 'text', 
      placeholder: 'Enter city/location', 
      required: true, 
      column: 'right' 
    },

    { 
      name: 'contact', 
      label: 'Contact Number', 
      type: 'text', 
      placeholder: 'Enter contact number', 
      required: true,
      validation: {
        pattern: {
          value: /^\d{10}$/,
          message: 'Must be a valid 10-digit number'
        }
      },
      column: 'right'
    },
    { 
      name: 'extraBedPrice', 
      label: 'Extra Bed Price', 
      type: 'number', 
      placeholder: 'Enter cost for extra bed', 
      column: 'right' 
    },
    { 
      name: 'checkOutTime', 
      label: 'Check-out Time', 
      type: 'time', 
      defaultValue: '11:00', 
      required: true, 
      column: 'right' 
    }
  ];

  const onSubmit = (data) => {
    dispatch(updateHotel({
      id: data.id,
      updatedData: data
    }));
    console.log("Updated adventure data:", data);
    navigate("/verified-hotels", {
      state: { message: "Hotel updated successfully!" }
    });
  };


  const handleCancel = () => {
    navigate("/verified-hotels");
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <EditForm
       register={register}
        control={control}
        errors={errors}
        setValue={setValue}
        watch={watch}
        handleSubmit={handleSubmit(onSubmit)}
        onCancel={handleCancel}
        formTitle="Hotel Details"
        fields={hotelFields}
        mediaOptions={{ photos: true, videos: true }}
      />
    </div>
  );
};

export default EditHotel;
