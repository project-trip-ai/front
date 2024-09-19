import Image from 'next/image';
import Button from '../../Button';
const ActivityCard = ({ image, name, startTime, endTime, adress }) => {
  return (
    <div className="flex w-full h-24">
      <div className="flex w-full p-3 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 hover:border-gray-300">
        {/* <div className="w-[70px] h-[70px] rounded-lg bg-gray-300 shadow-sm"></div> */}
        <Image
          priority
          src={image}
          height={70}
          width={70}
          className="rounded-lg shadow-sm"
          alt={name}
        />
        <div className="ml-3">
          <p>{name}</p>
          <div className="flex mt-2 items-center">
            {startTime && endTime ? (
              <Button
                buttonStyle={
                  'border border-gray-300 text-gray-500 text-xs rounded-xl bg-white'
                }>
                {startTime} - {endTime}
              </Button>
            ) : (
              <Button
                buttonStyle={
                  'border border-gray-300 text-gray-500 text-xs rounded-xl bg-white'
                }>
                Set time
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-10"></div>
    </div>
  );
};

export default ActivityCard;
