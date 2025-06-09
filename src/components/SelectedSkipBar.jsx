const SelectedSkipBar = ({ skip, onBack, onContinue }) => {
  if (!skip) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[600px] bg-white/80 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl px-6 py-4 z-50">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-800 font-semibold text-base">
            {skip.size} Yard Skip
          </p>
          <p className="text-gray-600 text-sm">{skip.hirePeriod}</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-xl font-bold text-blue-600">£{skip.price}</p>
          <button
            onClick={onBack}
            className="px-4 py-2 text-sm rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className="px-5 py-2 text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedSkipBar;
