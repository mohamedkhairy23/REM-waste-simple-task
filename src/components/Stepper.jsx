import React, { useEffect, useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaTrash,
  FaTruck,
  FaShieldAlt,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";

const steps = [
  { label: "Postcode", icon: <FaMapMarkerAlt /> },
  { label: "Waste Type", icon: <FaTrash /> },
  { label: "Select Skip", icon: <FaTruck /> },
  { label: "Permit Check", icon: <FaShieldAlt /> },
  { label: "Choose Date", icon: <FaCalendarAlt /> },
  { label: "Payment", icon: <FaCreditCard /> },
];

const Stepper = ({ currentStep }) => {
  const containerRef = useRef(null);
  const stepsRef = useRef(null);
  const activeStepRef = useRef(null);
  const [isContentFits, setIsContentFits] = useState(false);

  useEffect(() => {
    if (containerRef.current && stepsRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = stepsRef.current.scrollWidth;
      setIsContentFits(contentWidth <= containerWidth);
    }
  }, [stepsRef.current, containerRef.current]);

  // Scroll active step into center only if content overflows
  useEffect(() => {
    if (!isContentFits && activeStepRef.current && containerRef.current) {
      const container = containerRef.current;
      const step = activeStepRef.current;

      const containerCenter = container.offsetWidth / 2;
      const stepCenter = step.offsetLeft + step.offsetWidth / 2;

      const scrollLeft = stepCenter - containerCenter;

      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentStep, isContentFits]);

  return (
    <div className="relative bg-slate-800 rounded-md text-white py-4 px-2 sm:px-4 overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-slate-800 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-slate-800 to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className={`scroll-container-class flex overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 sm:px-2 ${
          isContentFits ? "justify-center" : "justify-start"
        }`}
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          ref={stepsRef}
          className="inline-flex gap-4"
          style={{ minWidth: 0 }}
        >
          {steps.map((step, index) => {
            const isActive = index <= currentStep;
            const isCurrent = index === currentStep;
            return (
              <div
                key={step.label}
                ref={isCurrent ? activeStepRef : null}
                className="flex items-center gap-2 min-w-max snap-center"
              >
                <div
                  className={`flex items-center gap-1 ${
                    isActive ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  <span className="text-base">{step.icon}</span>
                  <span className="text-xs sm:text-sm whitespace-nowrap">
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-px w-4 sm:w-6 ${
                      isActive ? "bg-blue-500" : "bg-gray-700"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
