import React from "react";

const ImageGallery = ({ images = [] }) => {
  const getImageUrl = (img) => (typeof img === "string" ? img : img?.url);
  const getImageAlt = (img, fallback) =>
    typeof img === "string" ? fallback : img?.alt || fallback;

  const mainImage = images[0];
  const gridImages = [images[1], images[2], images[3], images[4]];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl gap-4 mx-auto">
      {/* Main featured image (left on md+) */}
      <div className="w-full md:w-1/2 h-64 rounded-lg overflow-hidden shadow-md">
        <img
          src={getImageUrl(mainImage)}
          alt={getImageAlt(mainImage, "Featured image")}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>

      {/* Gallery grid (right on md+) */}
      <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-3 h-64">
        {gridImages.map((img, i) =>
          img ? (
            <div key={i} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={getImageUrl(img)}
                alt={getImageAlt(img, `Gallery image ${i + 1}`)}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ) : (
            <div
              key={i}
              className="rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
            >
              No Image
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
