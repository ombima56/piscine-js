const throttle = (func, limit) => {
    let inThrottle = false;

    return function(...args) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

const opThrottle = (func, wait, options = { leading: true, trailing: true }) => {
    let timeout, lastArgs, lastContext;
    let lastCallTime = 0;

    const invokeFunc = () => {
        func.apply(lastContext, lastArgs);
        lastCallTime = Date.now();
        timeout = null;
    };

    return function(...args) {
        const now = Date.now();
        const isLeading = options.leading && (now - lastCallTime >= wait);
        const isTrailing = options.trailing;

        lastArgs = args;
        lastContext = this;

        if (!timeout) {
            if (isLeading) {
                invokeFunc();
            }
            if (isTrailing) {
                timeout = setTimeout(invokeFunc, wait);
            }
        } else if (isTrailing) {
            clearTimeout(timeout);
            timeout = setTimeout(invokeFunc, wait);
        }
    };
};

const log = () => console.log('Throttled!');
const throttledLog = throttle(log, 1000);
const opThrottledLog = opThrottle(log, 1000);

throttledLog();
opThrottledLog();