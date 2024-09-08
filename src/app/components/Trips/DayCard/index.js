import AngleRight from "../../../../../public/icons/angle-right.svg"
const DayCard = ({ day, month,  ordinal }) => {
  
    return (
      <div className="text-2xl">
        <p>{day}, {month} {ordinal}</p>
        <div className="h-[1px] w-full bg-gray-300 my-4"></div>
      </div>
    );
  };
  
  export default DayCard;
  