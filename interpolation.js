const interpolation = ({step, start, end, callback, duration}) => {
    const interval = (end - start) / (step - 1);
    const timeStep = duration / (step - 1);
  
    const executeStep = (currentStep) => {
      if (currentStep < step) {
        const x = start + interval * currentStep;
        const y = timeStep * currentStep;
        callback([x, y]);
        
        setTimeout(() => executeStep(currentStep + 1), 0);
      }
    };
  
    setTimeout(() => executeStep(0), duration);
}

const step = 5;
const start = 0;
const end = 1;
const duration = 1000;

interpolation({
    step,
    start,
    end,
    duration,
    callback: (point) => console.log('Interpolated point:', point)
});