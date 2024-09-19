import Image from 'next/image';
import Button from '../../Button';

import TrashIcon from '../../../../../public/icons/trash.svg';
import DotsIcon from '../../../../../public/icons/dots-vertical.svg';
import MagicIcon from '../../../../../public/icons/magic.svg';

const ActivityCard = ({
  image,
  name,
  startTime,
  endTime,
  adress,
  onHover,
  handleDelete,
}) => {
  return (
    <div className="flex w-full h-24">
      <div
        className="flex w-full p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300"
        onMouseOver={onHover}>
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
      <div className="pl-1">
        <Button
          buttonStyle={
            'rounded-lg bg-white hover:bg-blue-100 active:bg-blue-200'
          }
          padding="p-2">
          <Image
            priority
            src={MagicIcon}
            alt="Try our AI !"
            height={16}
            width={16}
            onClick={() => router.back()}
          />
        </Button>
        <Button
          buttonStyle={
            'rounded-lg bg-white hover:bg-gray-100 active:bg-gray-200'
          }
          padding="p-2">
          <Image
            priority
            src={DotsIcon}
            alt="Drag and drop"
            height={16}
            width={16}
            onClick={() => router.back()}
          />
        </Button>
        <Button
          buttonStyle={'rounded-lg bg-white hover:bg-red-100 active:bg-red-200'}
          padding="p-2">
          <Image
            priority
            src={TrashIcon}
            alt="Delete"
            height={16}
            width={16}
            onClick={handleDelete}
          />
        </Button>
      </div>
    </div>
  );
};

export default ActivityCard;
