import Image from 'next/image';
import Button from '../Button';

const SelectableButtons = ({
  itemList,
  groupSelected,
  handleGroupSelect,
  gridCols = 'grid-cols-2',
}) => {
  return (
    <div className={`w-auto grid ${gridCols} gap-2`}>
      {itemList.map((type, index) => (
        <Button
          key={index}
          buttonStyle={`transition-colors duration-100 rounded-md shadow-sm active:bg-amber-300 active:border-amber-400 
                      ${
                        groupSelected === index
                          ? 'border border-amber-300 bg-amber-100 text-black hover:border-amber-400 hover:bg-amber-200'
                          : 'border border-gray-200 bg-white text-gray-400 hover:text-gray-500 hover:border-gray-300 hover:bg-gray-100'
                      }`}
          onClick={() => handleGroupSelect(index)}>
          <Image
            priority
            src={type.icon}
            alt="icon"
            width={40}
            height={40}
            className="mr-2"
          />
          {type.name}
        </Button>
      ))}
    </div>
  );
};

export default SelectableButtons;
