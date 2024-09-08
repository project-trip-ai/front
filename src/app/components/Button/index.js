const Button = ({ children, rounded = 'rounded-full', bgColor = 'bg-white', border = 'border-0', borderColor = 'border-0', opacity = 'bg-opacity-1', fontColor = 'text-white', fontSize = 'text-sm'}) => {
  
    return (
      <button
        className={` px-4 py-2 ${rounded} ${bgColor} ${border} ${borderColor} ${opacity} ${fontColor} ${fontSize}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  