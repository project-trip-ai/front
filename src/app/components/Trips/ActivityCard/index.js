import Button from '../../Button';
const ActivityCard = ({ image, name, startTime, endTime, price }) => {
  return (
    <div className="flex mb-8 w-full h-24">
      <div className="flex w-full p-3 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 hover:border-gray-300">
        <div className="w-[70px] h-[70px] rounded-lg bg-gray-300 shadow-sm"></div>
        <div className="ml-3">
          <p>teamLab Planets TOKYO</p>
          <div className="flex mt-2 items-center">
            <Button
              border="border"
              borderColor="border-gray-300"
              fontColor="text-gray-500"
              fontSize="text-xs"
              rounded="rounded-xl">
              10:00 AM - 11:00 AM
            </Button>
            <p className="mx-2"> • </p>
            <p className="text-sm">$56</p>
          </div>
        </div>
      </div>
      <div className="flex w-10"></div>
    </div>
  );
};

export default ActivityCard;
