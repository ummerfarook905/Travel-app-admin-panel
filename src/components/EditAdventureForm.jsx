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
    <form onSubmit={onSubmit} className="bg-white rounded-xl shadow-md mx-2 sm:mx-4 md:mx-6 lg:mx-8">
      <h2 className="text-xl font-semibold text-white bg-[#00493E] py-3 px-4 rounded-t-xl mb-6">
        Adventure Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 py-4 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Adventure Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Adventure Name"
              value={adventureData.name || ""}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Location Map Link *</label>
            <input
              type="text"
              name="mapLink"
              placeholder="Enter Location Map Link"
              value={adventureData.mapLink || ""}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Description *</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Provide a brief description"
              value={adventureData.description || ""}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Price *</label>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={adventureData.price || ""}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Max Persons *</label>
            <input
              type="number"
              name="maxPersons"
              placeholder="Enter Max Number"
              value={adventureData.maxPersons || ""}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Start Time *</label>
            <input
              type="time"
              name="startTime"
              value={adventureData.startTime || "09:00"}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Location *</label>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              value={adventureData.location || ""}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Contact Number *</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter Contact"
              value={adventureData.contact || ""}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Media Uploads - Responsive Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 mt-4 sm:mt-6">
            {/* Photos Section */}
            <div className="col-span-1">
              {photos.map((photo, index) => (
                <div key={`photo-${index}`} className="mb-3">
                  <div className="border-dashed border-2 border-gray-300 p-4 sm:p-6 rounded-lg text-center">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {photos.length > 1 ? `Photo ${index + 1} *` : "Photo *"}
                    </label>
                    <label className="inline-flex items-center justify-center w-full px-3 py-2 bg-gray-100 text-gray-700 rounded cursor-pointer border border-gray-300 hover:bg-gray-200">
                      <span className="truncate max-w-[120px] sm:max-w-[180px]">
                        {photo ? photo.name : "Choose Photo"}
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
                        className="mt-2 text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div className="text-center">
                <button
                  type="button"
                  onClick={addPhotoField}
                  className="w-full sm:w-auto px-4 py-2 bg-[#00493E] text-white rounded hover:bg-[#036657] text-sm sm:text-base"
                >
                  + Add Photo
                </button>
              </div>
            </div>

            {/* Videos Section */}
            <div className="col-span-1">
              {videos.map((video, index) => (
                <div key={`video-${index}`} className="mb-3">
                  <div className="border-dashed border-2 border-gray-300 p-4 sm:p-6 rounded-lg text-center">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {videos.length > 1 ? `Video ${index + 1} *` : "Video *"}
                    </label>
                    <label className="inline-flex items-center justify-center w-full px-3 py-2 bg-gray-100 text-gray-700 rounded cursor-pointer border border-gray-300 hover:bg-gray-200">
                      <span className="truncate max-w-[120px] sm:max-w-[180px]">
                        {video ? video.name : "Choose Video"}
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
                        className="mt-2 text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div className="text-center">
                <button
                  type="button"
                  onClick={addVideoField}
                  className="w-full sm:w-auto px-4 py-2 bg-[#00493E] text-white rounded hover:bg-[#036657] text-sm sm:text-base"
                >
                  + Add Video
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Extra per Head</label>
            <input
              type="number"
              name="extraHead"
              placeholder="Enter Extra Cost"
              value={adventureData.extraHead || ""}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Closing Time *</label>
            <input
              type="time"
              name="endTime"
              value={adventureData.endTime || "13:00"}
              onChange={onChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>
      </div>

      {/* Form Footer - Responsive Buttons */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 px-4 sm:px-6 pb-4 sm:pb-6">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-green-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-green-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditAdventureForm;