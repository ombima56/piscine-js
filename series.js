async function series(asyncFunctions) {
  const results = [];

  for (const fn of asyncFunctions) {
    const result = await fn(); 
    results.push(result);
  }

  return results;
}

const asyncFunc1 = async () => {
  return 'zone01';
};

const asyncFunc2 = async () => {
  return 'Kisumu';
};

const asyncFunc3 = async () => {
  return 'Offer the best programming curriculum.';
};

series([asyncFunc1, asyncFunc2, asyncFunc3])
  .then(results => console.log(results))
  .catch(error => console.error(error));
