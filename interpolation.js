const interpolation = ({ step, start, end, callback, duration, waitTime }) => {
    const interval = (end - start) / (step - 1);
    const delay = duration / (step - 1);

    if (waitTime >= duration) {
        return [];
    }

    const points = [];

    const callCallback = (i) => {
        if (i < step) {
            const x = start + interval * i;
            const y = delay * i;

            setTimeout(() => {
                callback([x, y]);
                points.push([x, y]); // Store the points in the array
                callCallback(i + 1); // Recursive call
            }, delay * i);
        }
    };

    callCallback(0); 
    return points;
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