const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function(...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
}

const opThrottle = (func, wait, options) => {
    let timeout, lastArgs, lastContext;
    let lastCallTime = 0;
    let result;
  
    if (typeof options !== 'object') {
      options = { leading: false, trailing: true };
    } else if (options.leading === undefined && options.trailing === undefined) {
      options = { ...options, leading: false, trailing: true };
    }
  
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
      } else if (!timeout) {
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