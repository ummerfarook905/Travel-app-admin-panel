const ImageGallery = ({ images }) => {
  // Handle both string and object image formats
  const getImageUrl = (img) => (typeof img === 'string' ? img : img?.url);
  const getImageAlt = (img, fallback) =>
    typeof img === 'string' ? fallback : img?.alt || fallback;

  return (
<div className="flex w-[600px] h-[200px] gap-4">
      {/* Main featured image (left) */}
      <div className="flex-1 h-full rounded-lg overflow-hidden shadow-md">
        <img
          src={getImageUrl(images[0])}
          alt={getImageAlt(images[0], 'Featured image')}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>

      {/* Gallery grid (right) */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 h-full">
        {/* Image 2 (top left) */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={getImageUrl(images[1])}
            alt={getImageAlt(images[1], 'Gallery image 1')}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>

        {/* Image 4 (top right) */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={getImageUrl(images[3])}
            alt={getImageAlt(images[3], 'Gallery image 2')}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>

        {/* Image 3 (bottom left) */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={getImageUrl(images[2])}
            alt={getImageAlt(images[2], 'Gallery image 3')}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>

        {/* Image 5 (bottom right) */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={getImageUrl(images[4])}
            alt={getImageAlt(images[4], 'Gallery image 4')}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
