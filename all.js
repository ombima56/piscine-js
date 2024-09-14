function all(promisesObj) {
    return new Promise((resolve, reject) => {
      const entries = Object.entries(promisesObj);
      const results = {};
      let completedPromises = 0;
      const totalPromises = entries.length;
  
      if (totalPromises === 0) {
        // If there are no promises, resolve immediately with an empty object
        return resolve(results);
      }
  
      entries.forEach(([key, value]) => {
        Promise.resolve(value)
          .then(result => {
            results[key] = result;
            completedPromises += 1;
  
            // If all promises have resolved, resolve the final promise
            if (completedPromises === totalPromises) {
              resolve(results);
            }
          })
          .catch(error => {
            // If any promise rejects, reject the final promise
            reject(error);
          });
      });
    });
}
  
// Example usage:
const promisesObj = {
  a: Promise.resolve(1),
  b: Promise.resolve(2),
  c: Promise.resolve(3),
};

all(promisesObj)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Example of rejection:
const promisesObjWithRejection = {
  a: Promise.resolve(1),
  b: Promise.reject(new Error('Failure!')),
  c: Promise.resolve(3),
};

all(promisesObjWithRejection)
  .then(result => console.log(result))
  .catch(error => console.error(error));
  