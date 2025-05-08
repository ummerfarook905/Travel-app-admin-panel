import React, { useState } from "react";

const EditForm = ({
  formData,
  onChange,
  onSubmit,
  onCancel,
  formTitle = "Form Details",
  fields = [],
  mediaOptions = { photos: true, videos: true }
}) => {
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

  // Group fields into left and right columns
  const leftFields = fields.filter(field => field.column === 'left');
  const rightFields = fields.filter(field => field.column === 'right');

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name] || field.defaultValue || "",
      onChange: onChange,
      className: "w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00493E] focus:border-transparent",
      required: field.required,
      placeholder: field.placeholder
    };

    switch (field.type) {
      case 'text':
        return (
          <div className="space-y-1.5" key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label} {field.required && '*'}
            </label>
            <input type="text" {...commonProps} />
          </div>
        );
      case 'number':
        return (
          <div className="space-y-1.5" key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label} {field.required && '*'}
            </label>
            <input type="number" {...commonProps} />
          </div>
        );
      case 'textarea':
        return (
          <div className="space-y-1.5" key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label} {field.required && '*'}
            </label>
            <textarea rows="4" {...commonProps} />
          </div>
        );
      case 'time':
        return (
          <div className="space-y-1.5" key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label} {field.required && '*'}
            </label>
            <input type="time" {...commonProps} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-xl shadow-md mx-auto max-w-7xl">
      {/* Header - Preserved your exact style */}
      <div className="bg-[#00493E] px-5 py-4 md:px-6 md:py-4 rounded-t-xl">
        <h2 className="text-lg md:text-xl font-semibold text-white text-center">
          {formTitle}
        </h2>
      </div>

      {/* Form Content - Preserved your exact grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-5 md:px-6 py-5 gap-5 md:gap-6">
        {/* Left Column */}
        <div className="space-y-4 md:space-y-5">
          {leftFields.map(field => renderField(field))}
        </div>

        {/* Right Column */}
        <div className="space-y-4 md:space-y-5 mt-4 md:mt-0">
          {rightFields.map(field => renderField(field))}

          {/* Media Uploads - Preserved your exact style */}
          {mediaOptions.photos && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 mt-3">
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

              {mediaOptions.videos && (
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
              )}
            </div>
          )}
        </div>
      </div>

      {/* Form Footer - Preserved your exact style */}
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

export default EditForm;