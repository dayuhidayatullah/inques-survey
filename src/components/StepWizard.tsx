import  { forwardRef, useImperativeHandle, useRef } from 'react';

const StepWizard = forwardRef((props, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    nextStep: () => {
      // Define your method logic
    },
    previousStep: () => {
      // Define your method logic
    },
    // Add other methods as needed
  }));

  return (
    <div ref={internalRef}>
      {/* Your StepWizard implementation */}
    </div>
  );
});

export default StepWizard;