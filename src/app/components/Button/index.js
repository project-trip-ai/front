const Button = ({
  children,
  rounded = 'rounded-full',
  bgColor = 'bg-white',
  border = 'border-0',
  borderColor = 'border-0',
  opacity = 'bg-opacity-1',
  fontColor = 'text-white',
  fontSize = 'text-sm',
  hover = '',
}) => {
  return (
    <button
      className={` px-3 py-[6px] ${rounded} ${bgColor} ${border} ${borderColor} ${opacity} ${fontColor} ${fontSize} ${hover}`}>
      {children}
    </button>
  );
};

export default Button;
