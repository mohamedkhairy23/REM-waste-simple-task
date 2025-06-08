const SelectedSkipBar = ({ skip, onBack, onContinue }) => {
  if (!skip) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white px-4 py-4 flex justify-between items-center shadow-lg z-50">
      <div>
        <p className="text-sm">{skip.size} Yard Skip</p>
        <p>
          <span className="text-blue-400 font-bold text-lg">£{skip.price}</span>{" "}
          <span className="text-sm text-gray-300">{skip.hirePeriod}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectedSkipBar;
