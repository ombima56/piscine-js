const interpolation = ({step, start, end, func, duration}) => {
    const interval = (end - start) / (step - 1);
    const delay = duration / (step - 1);
    
    for (let i = 0; i < step; i++) {
        const x = start + interval * i;
        const y = delay * i;
        
        setTimeout(() => {
            func([x, y]);
        }, y);
    }
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
    func: (point) => console.log('Interpolated point:', point)
});