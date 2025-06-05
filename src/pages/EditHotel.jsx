import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm"; 
import { updateHotel } from '../redux/hotelsSlice';
import { useDispatch } from 'react-redux';

const EditHotel = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Hotel Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    mapLink: Yup.string().url("Must be a valid URL").nullable(true).notRequired(),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    pricePerNight: Yup.number()
      .typeError("Price per Night must be a number")
      .required("Price per Night is required")
      .min(0, "Price must be positive")
      .max(999999, "Price is too high"),
    roomsAvailable: Yup.number()
      .typeError("Rooms Available must be a number")
      .required("Rooms Available is required")
      .min(1, "Must be at least 1 room")
      .max(500, "Rooms Available must be 500 or less"),
    checkInTime: Yup.string()
      .required("Check-in Time is required"),
    location: Yup.string()
      .required("Location is required"),
    contact: Yup.string()
      .required("Contact number is required")
      .matches(/^\d{10}$/, "Must be a valid 10-digit number"),
    extraBedPrice: Yup.number()
      .typeError("Extra Bed Price must be a number")
      .min(0, "Extra Bed Price can't be negative")
      .nullable(true)
      .notRequired(),
    checkOutTime: Yup.string()
      .required("Check-out Time is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch
  } = useForm({
    defaultValues: state?.hotel || {},
    resolver: yupResolver(validationSchema),
  });

  const hotelFields = [
    { name: 'name', label: 'Hotel Name', type: 'text', placeholder: 'Enter hotel name', required: true, column: 'left' },
    { name: 'mapLink', label: 'Location Map Link', type: 'text', placeholder: 'Enter map URL', column: 'left' },
    { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe the hotel', required: true, column: 'left' },
    { name: 'pricePerNight', label: 'Price per Night', type: 'number', placeholder: 'Enter nightly rate', required: true, column: 'left' },
    { name: 'roomsAvailable', label: 'Rooms Available', type: 'number', placeholder: 'Enter number of rooms', required: true, column: 'left' },
    { name: 'checkInTime', label: 'Check-in Time', type: 'time', defaultValue: '14:00', required: true, column: 'left' },
    { name: 'location', label: 'Location', type: 'text', placeholder: 'Enter city/location', required: true, column: 'right' },
    { name: 'contact', label: 'Contact Number', type: 'text', placeholder: 'Enter contact number', required: true, validation: { pattern: { value: /^\d{10}$/, message: 'Must be a valid 10-digit number' } }, column: 'right' },
    { name: 'extraBedPrice', label: 'Extra Bed Price', type: 'number', placeholder: 'Enter cost for extra bed', column: 'right' },
    { name: 'checkOutTime', label: 'Check-out Time', type: 'time', defaultValue: '11:00', required: true, column: 'right' }
  ];

  const onSubmit = (data) => {
    dispatch(updateHotel({
      id: data.id,
      updatedData: data
    }));
    console.log("Updated hotel data:", data);
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
