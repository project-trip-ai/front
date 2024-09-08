import ActivityCard from '../ActivityCard';
import AngleRight from '../../../../../public/icons/angle-right.svg';
import Image from 'next/image';

const DayCard = ({ day, month, ordinal }) => {
  return (
    <div>
      <div className="flex">
        <Image priority src={AngleRight} />
        <p className="text-2xl">
          {day}, {month} {ordinal}
        </p>
      </div>

      <div className="h-[1px] w-full bg-gray-300 my-8"></div>
      <ActivityCard />
    </div>
  );
};

export default DayCard;
