
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog";
import Toast from "./Toast";
import useConfirmDialog from "../hooks/useConfirmDialog";

import munnar from "../assets/Images/Destination/Munnar.jpg";
import beach from "../assets/Images/Destination/Beach.jpg";
import goa from "../assets/Images/Destination/Goa.jpg";
import madayipara from "../assets/Images/Destination/madayipara.jpeg";
import vypin from "../assets/Images/Destination/vypin.jpg";


const DESTINATION_IMAGES = {
  munnar,
  beach,
  goa,
  madayipara,
  vypin,
};

const DestinationInfoBar = ({ destination }) => {
  const navigate = useNavigate();

  const {
    isOpen,
    openDialog,
    closeDialog,
    confirm,
    payload,
  } = useConfirmDialog();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const showSuccessToast = (message) => {
    setToastMessage(message);
    setToastType("success");
    setShowToast(true);
  };

  const showErrorToast = (message) => {
    setToastMessage(message);
    setToastType("error");
    setShowToast(true);
  };

  if (!destination) {
    return (
      <div className="p-6 text-center text-xl text-gray-500">
        Destination not found.
      </div>
    );
  }

  const handleDeleteClick = () => {
    openDialog(handleConfirmDelete, destination);
  };

  const handleConfirmDelete = (data) => {
    showErrorToast(`Destination "${data.name}" deleted successfully.`);
  };

  const handleCancelDelete = () => {
    closeDialog();
    showSuccessToast("Destination deletion cancelled.");
  };

  const handleEditClick = () => {
    navigate(`/destination/edit/${destination.id}`, {
      state: { destination },
    });
  };

 
  const resolvedImage = DESTINATION_IMAGES[destination.image];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-t-3xl overflow-hidden cursor-pointer">
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onclose={() => setShowToast(false)}
        />
      )}

      <div className="relative h-[300px] mt-6 mx-6">
        <img
          src={resolvedImage}
          alt={destination.name}
          className="w-full h-[300px] object-cover rounded-t-3xl"
        />
      </div>

      <div className="bg-[#004D40] px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center rounded-b-3xl mx-6">
        <div className="flex items-center space-x-4">
          <div className="bg-orange-500 p-2 rounded-full">
            <FaMapMarkerAlt className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">{destination.name}</h1>
            <p className="text-white text-sm">{destination.location}</p>
          </div>
        </div>

        <div className="flex space-x-2 mt-4 md:mt-0">
          <button
            className="bg-white text-[#004D40] px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 cursor-pointer"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
          <button
            className="bg-white text-[#004D40] px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 cursor-pointer"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>

      {isOpen && (
        <ConfirmationDialog
          message={`Do you really want to delete "${payload?.name}"?`}
          onCancel={handleCancelDelete}
          onConfirm={confirm}
        />
      )}
    </div>
  );
};

export default DestinationInfoBar;
