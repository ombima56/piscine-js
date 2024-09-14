async function queryServers(serverName, q) {
  const url1 = `/${serverName}?q=${encodeURIComponent(q)}`;
  const url2 = `/${serverName}_backup?q=${encodeURIComponent(q)}`;

  const response1 = getJSON(url1);
  const response2 = getJSON(url2);
  
  return Promise.race([response1, response2]);
}


async function gougleSearch(q) {
  const servers = ["web", "image", "video"];
  
  const promises = servers.map(server => queryServers(server, q));

  // Set a timeout for the entire operation
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), 80)
  );

  try {
    // Wait for all queries to complete or for the timeout
    const results = await Promise.race([Promise.all(promises), timeoutPromise]);
    
    // Return results as an object with server names as keys
    return results.reduce((acc, result, index) => {
      acc[servers[index]] = result;
      return acc;
    }, {});
  } catch (error) {
    if (error.message === 'timeout') {
      throw new Error('timeout');
    }
    throw error;
  }
}

// fake `getJSON` function
// let getJSON = async (url) => url;

// gougleSearch('hello world')
//   .then(console.log)
//   .catch(console.error);