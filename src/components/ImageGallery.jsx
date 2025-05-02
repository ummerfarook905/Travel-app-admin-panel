const ImageGallery = ({ images }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {images.map((img, index) => (
        <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
          <img
            src={img.url}
            alt={img.alt || `Gallery item ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
  
  export default ImageGallery;