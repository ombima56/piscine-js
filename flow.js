const flow = (funcs) => {
    return function(...args) {
        return funcs.reduce((acc, func, index) => {
            // Apply all arguments to the first function, and then subsequent ones get a single argument
            return index === 0 ? func(...acc) : func(acc);
        }, args);
    };
};

// // Example functions
// const square = (nbr) => nbr * nbr;
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2;

// // Create the flow of functions
// const flowedFunctions = flow([add2Numbers, square]);

// // Test case
// console.log(flowedFunctions(2, 3)); // Output: 25


const add = n => n + 2;
const multiply = n => n * 3;
const subtract = n => n - 1;

const customFlow = flow([add, multiply, subtract]);

console.log(customFlow(4));