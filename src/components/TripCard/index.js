import Link from 'next/link';
import pin from '../../../public/icons/map-pin.svg';

const TripCard = ({ trip }) => {
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return durationInDays;
  };

  return (
    <Link
      className="rounded-2xl overflow-hidden transition-shadow duration-300"
      href={`/itinerary/${trip.id}`}>
      <div className="relative h-72 border-4 border-gray-200 rounded-2xl">
        <div className="rounded-xl  h-full w-full overflow-hidden">
          <img
            src={trip.bgImg}
            alt={trip.destination}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 left-4 bg-white text-black rounded-full px-3 py-[2px] text-xs font-semibold">
          {calculateDuration(trip.startDate, trip.endDate)} days
        </div>
      </div>
      <div className="py-1">
        <h2 className="text-lg font-bold leading-tight mb-1">
          {trip.description}
        </h2>
        <div className="flex items-center gap-1 text-[15px] font-medium text-gray-400 tracking-[0.5px]">
          <img src={pin.src} className="w-4 h-5" />
          <span>{trip.destination}</span>
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
