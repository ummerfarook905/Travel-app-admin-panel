 const DestinationCard = ({ name,image}) => {

    return (
         
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <img src={image} alt={name} className="w-full h-40 object-cover" />
        <div className="p-2 text-center bg-white">
          <h3 className="text-md font-semibold">{name}</h3>
        </div>
      </div>
    )
 }

 export default DestinationCard;