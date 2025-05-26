const ImageGallery = ({ images }) => {
  const getImageUrl = (img) => (typeof img === 'string' ? img : img?.url);
  const getImageAlt = (img, fallback) =>
    typeof img === 'string' ? fallback : img?.alt || fallback;

  return (
    <div className="flex w-full max-w-[600px] h-[200px] gap-4 mx-auto">
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
        {[1, 3, 2, 4].map((idx, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-md">
            <img
              src={getImageUrl(images[idx])}
              alt={getImageAlt(images[idx], `Gallery image ${i + 1}`)}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
