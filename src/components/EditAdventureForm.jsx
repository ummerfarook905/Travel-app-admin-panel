import React, { useState } from "react";

const EditAdventureForm = ({ adventureData, onChange, onSubmit, onCancel }) => {
  const [photos, setPhotos] = useState([null]);
  const [videos, setVideos] = useState([null]);

  const handlePhotoChange = (index, e) => {
    const newPhotos = [...photos];
    newPhotos[index] = e.target.files[0];
    setPhotos(newPhotos);
    onChange(e);
  };

  const handleVideoChange = (index, e) => {
    const newVideos = [...videos];
    newVideos[index] = e.target.files[0];
    setVideos(newVideos);
    onChange(e);
  };

  const addPhotoField = () => setPhotos([...photos, null]);
  const addVideoField = () => setVideos([...videos, null]);

  const removePhoto = (index) => {
    if (photos.length > 1) setPhotos(photos.filter((_, i) => i !== index));
  };

  const removeVideo = (index) => {
    if (videos.length > 1) setVideos(videos.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-xl shadow-md mx-auto max-w-7xl">
      {/* Header */}
      <div className="bg-[#00493E] px-5 py-4 md:px-6 md:py-4 rounded-t-xl">
        <h2 className="text-lg md:text-xl font-semibold text-white text-center">
          Adventure Details
        </h2>
      </div>

      {/* Form Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-5 md:px-6 py-5 gap-5 md:gap-6">
        {/* Left Column */}
        <div className="space-y-4 md:space-y-5">
          {/* Adventure Name */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Adventure Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter adventure name"
              value={adventureData.name || ""}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
              required
            />
          </div>

          {/* Map Link */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Location Map Link *</label>
            <input
              type="text"
              name="mapLink"
              placeholder="Enter map URL"
              value={adventureData.mapLink || ""}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Description *</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Describe the adventure"
              value={adventureData.description || ""}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
            />
          </div>

          {/* Price */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Price *</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={adventureData.price || ""}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
              required
            />
          </div>

          {/* Max Persons */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Max Persons *</label>
            <input
              type="number"
              name="maxPersons"
              placeholder="Enter maximum capacity"
              value={adventureData.maxPersons || ""}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
              required
            />
          </div>

          {/* Start Time */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Start Time *</label>
            <input
              type="time"
              name="startTime"
              value={adventureData.startTime || "09:00"}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 md:space-y-5 mt-4 md:mt-0">
          {/* Location */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Location *</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={adventureData.location || ""}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
              required
            />
          </div>

          {/* Contact */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Contact Number *</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter contact number"
              value={adventureData.contact || ""}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
              required
            />
          </div>

          {/* Media Uploads */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 mt-3">
            {/* Photos Section */}
            <div className="col-span-1 space-y-3">
              {photos.map((photo, index) => (
                <div key={`photo-${index}`}>
                  <div className="border-dashed border border-gray-300 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {photos.length > 1 ? `Photo ${index + 1} *` : "Photo *"}
                    </label>
                    <label className="flex flex-col items-center justify-center w-full p-2 bg-gray-50 rounded border border-gray-200 cursor-pointer hover:bg-gray-100">
                      <span className="text-sm text-gray-500 truncate w-full text-center">
                        {photo ? photo.name : "Select file"}
                      </span>
                      <input
                        type="file"
                        name={`photo-${index}`}
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePhotoChange(index, e)}
                      />
                    </label>
                    {photos.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="mt-2 text-xs text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addPhotoField}
                className="w-full py-2 text-sm font-medium text-[#00493E] border border-[#00493E] rounded-lg hover:bg-[#00493E] hover:text-white transition-colors"
              >
                + Add Photo
              </button>
            </div>

            {/* Videos Section */}
            <div className="col-span-1 space-y-3">
              {videos.map((video, index) => (
                <div key={`video-${index}`}>
                  <div className="border-dashed border border-gray-300 p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {videos.length > 1 ? `Video ${index + 1} *` : "Video *"}
                    </label>
                    <label className="flex flex-col items-center justify-center w-full p-2 bg-gray-50 rounded border border-gray-200 cursor-pointer hover:bg-gray-100">
                      <span className="text-sm text-gray-500 truncate w-full text-center">
                        {video ? video.name : "Select file"}
                      </span>
                      <input
                        type="file"
                        name={`video-${index}`}
                        accept="video/*"
                        className="hidden"
                        onChange={(e) => handleVideoChange(index, e)}
                      />
                    </label>
                    {videos.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeVideo(index)}
                        className="mt-2 text-xs text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addVideoField}
                className="w-full py-2 text-sm font-medium text-[#00493E] border border-[#00493E] rounded-lg hover:bg-[#00493E] hover:text-white transition-colors"
              >
                + Add Video
              </button>
            </div>
          </div>

          {/* Extra per Head */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Extra per Head</label>
            <input
              type="number"
              name="extraHead"
              placeholder="Enter additional cost"
              value={adventureData.extraHead || ""}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
            />
          </div>

          {/* Closing Time */}
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Closing Time *</label>
            <input
              type="time"
              name="endTime"
              value={adventureData.endTime || "13:00"}
              onChange={onChange}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent"
              required
            />
          </div>
        </div>
      </div>

      {/* Form Footer */}
      <div className="px-5 py-4 md:px-6 md:py-5 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 text-sm font-medium text-white bg-[#00493E] rounded-lg hover:bg-[#00382E] focus:outline-none focus:ring-2 focus:ring-[#00382E]"
          >
            Save 
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditAdventureForm;