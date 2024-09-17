const Button = ({
  children,
  buttonStyle,
  padding = 'px-3 py-[6px]',
  onClick,
}) => {
  return (
    <button
      className={`flex items-center justify-center ${padding} ${buttonStyle}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
