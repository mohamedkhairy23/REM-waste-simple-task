import { useSkips } from "../hooks/useSkips";
import SkipCard from "../components/SkipCard";
import Stepper from "../components/Stepper";
import SelectedSkipBar from "../components/SelectedSkipBar";
import { useGlobal } from "../context/GlobalContext";
import Loader from "../components/Loader";

const ChooseSkipSize = () => {
  const { skips, loading } = useSkips();
  // I made that state global so that it can be accessed in other components when scaling up
  const { selectedId, setSelectedId } = useGlobal();

  const selectedSkip = skips.find((skip) => skip.id === selectedId);

  const handleSelect = (skip) => {
    setSelectedId(skip.id);
  };

  const handleBack = () => {
    // console.log("Back clicked");
  };

  const handleContinue = () => {
    // console.log("Continue clicked with skip ID:", selectedId);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto pb-32">
      <Stepper currentStep={2} />
      <h1 className="text-2xl text-slate-700 font-bold mt-3">
        Choose Your Skip Size
      </h1>
      <p className="text-sm text-slate-500 font-medium mb-4">
        Select the skip size that fits your needs.
      </p>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skips?.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedId === skip.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}

      <SelectedSkipBar
        skip={selectedSkip}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default ChooseSkipSize;
