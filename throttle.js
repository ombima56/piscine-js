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
    let result;

    const invokeFunc = () => {
        result = func.apply(lastContext, lastArgs);
        lastCallTime = Date.now();
        timeout = null;
    };

    const later = () => {
        const timeSinceLastCall = Date.now() - lastCallTime;

        if (timeSinceLastCall < wait && timeSinceLastCall >= 0) {
            timeout = setTimeout(later, wait - timeSinceLastCall);
        } else {
            if (options.trailing && lastArgs) {
                invokeFunc();
            }
        }
    };

    return function(...args) {
        const now = Date.now();
        const isLeading = options.leading && (now - lastCallTime >= wait);

        lastArgs = args;
        lastContext = this;

        if (isLeading) {
            invokeFunc();
        }

        if (!timeout) {
            timeout = setTimeout(later, wait);
        }

        return result;
    };
}

const log = () => console.log('Throttled!');
const throttledLog = throttle(log, 1000);
const opThrottledLog = opThrottle(log, 1000);

throttledLog();
opThrottledLog();