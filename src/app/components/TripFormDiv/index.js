const TripFormDiv = ({ title, children }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg">{title}</h2>
      {children}
    </div>
  );
};

export default TripFormDiv;
