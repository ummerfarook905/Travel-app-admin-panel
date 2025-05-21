const ImageGallery = ({ images }) => (
  <div className="flex w-full h-[286px] gap-4">
    {/* Main featured image (left) */}
    <div className="flex-1 h-full rounded-lg overflow-hidden shadow-md">
      <img
        src={images[0]?.url}
        alt={images[0]?.alt || 'Featured image'}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
    </div>

    {/* Gallery grid (right) */}
    <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 h-full">
      {/* Image 2 (top left) */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={images[1]?.url}
          alt={images[1]?.alt || 'Gallery image 1'}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      
      {/* Image 4 (top right) */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={images[3]?.url}
          alt={images[3]?.alt || 'Gallery image 2'}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      
      {/* Image 3 (bottom left) */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={images[2]?.url}
          alt={images[2]?.alt || 'Gallery image 3'}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
      
      {/* Image 5 (bottom right) */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={images[4]?.url}
          alt={images[4]?.alt || 'Gallery image 4'}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
      </div>
    </div>
  </div>
);

export default ImageGallery;