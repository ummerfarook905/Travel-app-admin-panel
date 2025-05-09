
const DestinationImageHeader =({ image, name})=>{
    <div className ="relative h-[300px] mt-6 mx-6">
        <img
        src={image}
        alt={name}
        className="w-full h-[300px] object-cover rounded-t-3xl"
        />

    </div>
}

export default DestinationImageHeader;