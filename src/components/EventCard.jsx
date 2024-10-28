const EventCard = ({ image, name, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={image} alt={name} />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default EventCard;
  