const interpolation = ({ step, start, end, callback, duration, waitTime }) => {
    return new Promise((resolve) => {
        if (waitTime >= duration) {
            resolve({ length: 0 });
            return;
        }

        const interval = (end - start) / (step - 1);
        const delay = duration / (step - 1);

        let currentStep = 0;

        const executeStep = () => {
            if (currentStep < step) {
                const x = start + interval * currentStep;
                const y = delay * currentStep;
                callback([x, y]);
                currentStep++;
                setTimeout(executeStep, delay);
            } else {
                resolve({ length: currentStep });
            }
        };

        setTimeout(executeStep, waitTime);
    });
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