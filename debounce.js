const debounce = (func, wait) => {
    let timeout;

    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

const opDebounce = (func, wait, options = {leading: false}) => {
    let timeout;
    let lastCall = false;

    return function(...args) {
        const context = this;
        const shouldCallNow = options.leading && !lastCall;
        clearTimeout(timeout)

        if (shouldCallNow) {
            lastCall = true;
            func.apply(context, args)
        }

        timeout = setTimeout(() => {
            lastCall =false;
            if (!options.leading) {
                func.apply(context, args);
            }
        }, wait)
    };
}

const log = debounce(() => console.log("Debounced!"), 1000);
log();

const logImmediate = opDebounce(() => console.log("Leading!"), 1000, { leading: true });
logImmediate();