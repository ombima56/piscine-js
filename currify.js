const currify = (func) => {
    // Inner function to handle the partial application
    const curried = (...args) => {
        // If the number of accumulated arguments equals the function's arity, invoke the function
        if (args.length >= func.length) {
            return func(...args);
        } else {
            // Otherwise, return a new function that continues to accept arguments
            return (...moreArgs) => curried(...args, ...moreArgs);
        }
    };
    return curried;
};

// const mult2 = (el1, el2) => el1 * el2;

// console.log(mult2(2, 2));

// const mult2Curried = currify(mult2);

// console.log(mult2Curried(2)(2));
