const SkipCard = ({ skip, isSelected, onSelect }) => {
  return (
    <div
      className={`flex rounded-2xl p-4 transition-all shadow-md bg-gray-50 hover:shadow-xl cursor-pointer relative overflow-hidden ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
      onClick={() => onSelect(skip)}
    >
      {/* Left Accent if Selected */}
      {isSelected && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-2xl" />
      )}

      {/* Image Section */}
      <div className="w-36 h-36 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src="/skip.jpg"
          alt={`${skip.size} Yard Skip`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="ml-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {skip.size} Yard Skip
            </h2>
            <span className="text-xs bg-blue-100 text-blue-800 font-medium px-2 py-0.5 rounded-full">
              {skip.hirePeriod}
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            Perfect for medium-sized clearances.
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-blue-600">£{skip.price}</p>
          <button
            className={`text-sm font-medium px-4 py-2 rounded-xl transition-all ${
              isSelected
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent onClick
              onSelect(skip);
            }}
          >
            {isSelected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
