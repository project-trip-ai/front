const SubscriptionCard = ({ tier, price, features, onBuyNow }) => {
  const getTierColor = (tier) => {
    if (!tier) return "bg-gray-100 text-gray-800";
    switch (tier.toLowerCase()) {
      case "1 month subscription":
        return "bg-blue-100 text-blue-800";
      case "3 months subscription":
        return "bg-purple-100 text-purple-800";
      case "6 months subscription":
        return "bg-green-100 text-green-800";
      case "1 year subscription":
        return "bg-red-100 text-red-800";
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
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
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
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={onBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
