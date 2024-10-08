import Button from '../Button';

const Counter = ({ counter, setCounter, min, max }) => {
  const handleIncrement = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > min) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <Button
        type="button"
        buttonStyle={`border border-gray-300 text-black rounded-md w-10 hover:bg-gray-100 active:bg-gray-300 active:border-gray-400 ${counter > min ? 'hover:border-gray-400' : ''} ${counter > min ? 'bg-white' : 'bg-gray-100'}`}
        onClick={handleDecrement}>
        -
      </Button>
      <Button
        type="button"
        buttonStyle={`border border-gray-300 text-black rounded-md w-10 hover:bg-gray-100 active:bg-gray-300 active:border-gray-400 ${counter < max ? 'hover:border-gray-400' : ''} ${counter < max ? 'bg-white' : 'bg-gray-100'}`}
        onClick={handleIncrement}>
        +
      </Button>
    </>
  );
};

export default Counter;
