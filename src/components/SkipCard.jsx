const SkipCard = ({ skip, isSelected, onSelect }) => {
  return (
    <div
      className={`rounded-xl p-4 transition-all shadow-sm bg-white hover:shadow-lg cursor-pointer ${
        isSelected ? "border-blue-600 ring-2 ring-blue-300" : ""
      }`}
    >
      <div className="relative">
        <img
          src={"/skip.jpg"}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-40 object-cover rounded"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
          {skip.size} Yards
        </div>
      </div>
      <h2 className="mt-2 font-semibold text-lg">{skip.size} Yard Skip</h2>
      <p className="text-sm text-gray-500">{skip.hirePeriod} hire period</p>
      <p className="mt-1 font-bold text-blue-600">£{skip.price}</p>
      <button
        onClick={() => onSelect(skip)}
        className={`mt-3 w-full py-2 rounded text-sm font-medium transition-colors ${
          isSelected
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-black hover:bg-gray-200"
        }`}
      >
        {isSelected ? "Selected" : "Select This Skip"}
      </button>
    </div>
  );
};

export default SkipCard;
