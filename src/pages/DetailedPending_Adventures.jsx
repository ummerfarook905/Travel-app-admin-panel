import { useLocation, useParams } from "react-router-dom";

const DetailedPending_Adventures = () => {
  const { state } = useLocation();
  const { id } = useParams();

  if (!state?.adventure) {
    return <div className="p-8 text-center">Could not load adventure details</div>;
  }

  const adventure = state.adventure;

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      {/* Main Card Container */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section with Cover Image */}
        <div className="relative h-48 md:h-64 bg-gradient-to-r from-[#00493E] to-[#028476]">
          <img
            src={adventure.coverImage || "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
            alt={adventure.name}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-4 left-4 flex items-end">
            <img
              src={adventure.coverImage || "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
              alt={adventure.name}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <h1 className="ml-4 text-white text-xl md:text-3xl font-bold drop-shadow-lg">
              {adventure.name}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <InfoItem icon="📍" text={adventure.location} />
            <InfoItem icon="📞" text={adventure.phone} />
            <InfoItem icon="✉️" text={adventure.email} />
            <InfoItem icon="👤" text={adventure.username} />
          </div>

          {/* Description */}
          <div className="mb-6">
            <SectionTitle>About This Adventure</SectionTitle>
            <p className="text-gray-700 text-sm md:text-base">
              {adventure.description}
            </p>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="bg-[#00493E] text-white rounded-lg px-6 py-3 inline-flex items-center">
              <span className="text-lg font-bold">${adventure.price}</span>
              <span className="ml-2 text-sm">/ person</span>
            </div>
          </div>

          {/* Map + Gallery Section */}
          <div className="mb-8">
            <SectionTitle>Location & Gallery</SectionTitle>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden h-48 md:h-64 shadow-md">
                  <img
                    src={adventure.mapImage || "https://maps.googleapis.com/maps/api/staticmap?center=Lake+Tahoe,CA&zoom=12&size=600x400&maptype=terrain&key=YOUR_API_KEY"}
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {adventure.images.map((img, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <img
                        src={img || `https://source.unsplash.com/random/300x300/?adventure,${index}`}
                        alt={`Adventure view ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200">
            <button className="px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-50 transition-colors">
              Reject
            </button>
            <button className="px-6 py-2 bg-[#00493E] text-white rounded-full hover:bg-[#00382f] transition-colors">
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable components
const SectionTitle = ({ children }) => (
  <h2 className="text-lg md:text-xl font-semibold text-[#00493E] mb-2">
    {children}
  </h2>
);

const InfoItem = ({ icon, text }) => (
  <div className="flex items-center p-2 bg-gray-50 rounded-lg">
    <span className="mr-2 text-lg">{icon}</span>
    <span className="text-sm md:text-base truncate">{text}</span>
  </div>
);

export default DetailedPending_Adventures;