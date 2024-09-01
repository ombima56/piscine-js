function getURL(dataSet) {
    const pattern = /https?:\/\/\S+/g;
    return dataSet.match(pattern) || [];
}

function greedyQuery(dataSet) {
    const pattern = /https?:\/\/\S+\?\S+(?:&\S+){2,}/g;
    return dataSet.match(pattern) || [];
}

function notSoGreedy(dataSet) {
    const pattern = /https?:\/\/[^\s?]+\?[^&\s]+=([^&\s]+)(?:&[^&\s]+=([^&\s]+)){1,2}(?!&\S)/g;
    const matches = dataSet.match(pattern) || [];
    return matches.filter(url => {
        const params = url.split('?')[1].split('&');
        return params.length >= 2 && params.length <= 3;
    });
}

// const dataSet = `
// qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you
// http://test.com?param1=value1&param2=value2
// https://greedy.com/path?p1=v1&p2=v2&p3=v3&p4=v4
// http://notgreedy.com/path?p1=v1&p2=v2&p3=v3
// `;

// console.log("All URLs:");
// console.log(getURL(dataSet));

// console.log("\nURLs with at least 3 query parameters:");
// console.log(greedyQuery(dataSet));

// console.log("\nURLs with 2 or 3 query parameters:");
// console.log(notSoGreedy(dataSet));