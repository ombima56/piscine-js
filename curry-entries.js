const defaultCurry = (obj1) => {
    return obj2 => {
        return {...obj1, ...obj2}
    }
}

const mapCurry = (func) => (obj) => {
    const result = {};

    for (let [key, value] of Object.entries(obj)) {
        const [newKey, newValue] = func([key, value]);
        result[newKey] = newValue;
    }
    return result;
}

const reduceCurry = (func) => (obj, initialValue = 0) => {
    let accumulator = initialValue;
    for (const [key, value] of Object.entries(obj)) {
        accumulator = func(accumulator, [key,value])
    }
    return accumulator;
}

const filterCurry = (func) => (obj) =>{
    const result = {};

    for ( const [key, value] of Object.entries(obj)) {
        if (func([key, value])) {
            result[key] = value;
        }
    }
    return result;
}

const reduceScore = reduceCurry((acc, [k,v]) => {
    if (v.isForceUser) {
        return acc + v.pilotingScore + v.shootingScore
    }
    return acc;
});

const filterForce = filterCurry(([k, v]) => 
    (v.isForceUser && v.shootingScore >= 80)    
);

const mapAverage = mapCurry(([k, v]) => {
    const averageScore = (v.pilotingScore + v.shootingScore) / 2;
    return [k, {...v, averageScore}];
});

// const personnel = {
//     lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//     sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//     calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }
// 
// const totalForceUserScores = reduceScore(personnel, 0);
// console.log(totalForceUserScores);
// 
// const highShootingForceUsers = filterForce(personnel);
// console.log(highShootingForceUsers);
// 
// const personnelWithAverage = mapAverage(personnel);
// console.log(personnelWithAverage);
// const output = filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//     str: 'string',
//     nbr: 1,
//     arr: [1, 2],
// })

// console.log(output);
  

// const output = defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
//   })({
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
// })

// console.log(output);

// const personnel = {
//     lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//     sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//     calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  }
// };
  
// const output = mapCurry(([key, value]) => [`${key}_force`, value])(personnel);
// console.log(output);

// const answer = reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0);
// console.log(answer);
  