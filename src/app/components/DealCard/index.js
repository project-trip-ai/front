const SubscriptionCard = ({ tier, price, features }) => {
  const getTierColor = (tier) => {
    if (!tier) return "bg-gray-100 text-gray-800";
    switch (tier.toLowerCase()) {
      case "basic":
        return "bg-blue-100 text-blue-800";
      case "premium":
        return "bg-purple-100 text-purple-800";
      case "pro":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className={`flex items-center justify-between mb-4`}>
          <div
            className={`font-bold text-xl ${getTierColor(
              tier
            )} rounded-full px-3 py-1`}
          >
            {tier}
          </div>
          &#9734;
          {/* <Star className="text-yellow-400" size={24} /> */}
        </div>
        <p className="text-gray-700 text-base mb-2">
          Your current subscription
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <span className="text-sm text-gray-600 flex items-center">
            {/* <Calendar className="mr-1" size={16} /> */}
            &#xf073; per month
          </span>
        </div>
        <ul className="text-sm text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              {/* <Check className="mr-2 text-green-500" size={16} /> */}
              &#10003;
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionCard;
