const getJSON = async (path, params = {}) => {
    // Constructing the URL with query parameters
    const url = new URL(path);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
    // Fetch the data
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    const jsonData = await response.json();
  
    if (jsonData.error) {
      throw new Error(jsonData.error);
    } else if (jsonData.data !== undefined) {
      return jsonData.data;
    } else {
      throw new Error('Invalid response format');
    }
}