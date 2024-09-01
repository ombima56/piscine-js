function getURL(dataSet) {
    const pattern = /https?:\/\/\S+/g;
    return dataSet.match(pattern) || [];
}

function greedyQuery(dataSet) {
    const pattern = /https?:\/\/\S+\?\S+(?:&\S+){2,}/g;
    return dataSet.match(pattern) || [];
}

function notSoGreedy(dataSet) {
    const urls = getURL(dataSet);

    return urls.filter(url => {
        const queryStart = url.indexOf('?');
        if (queryStart === -1) return false; // No query parameters, exclude this URL

        const queryString = url.substring(queryStart + 1);
        const params = queryString.split('&');

        // Ensure there are 2 to 3 query parameters
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