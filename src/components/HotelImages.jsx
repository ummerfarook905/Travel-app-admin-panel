const HotelImages = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`hotel-${idx}`}
          className="rounded-lg object-cover h-36 w-full"
        />
      ))}
    </div>
  );
};

export default HotelImages;