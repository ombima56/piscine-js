const interpolation = ({ step, start, end, callback, duration }) => {
    const interval = (end - start) / (step - 1);
    const delay = duration / (step - 1);

    const interpolate = (i) => {
        if (i < step) {
            const x = start + interval * i;
            const y = duration * (i / (step - 1)); // Calculate y based on the total duration

            setTimeout(() => {
                callback([x, y]);
                interpolate(i + 1); // Recursive call for the next step
            }, delay * i);
        }
    };

    interpolate(0);
};

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