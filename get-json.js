async function getJSON(path = '', params = {}) {
    // Construct the URL with query parameters
    const queryString = new URLSearchParams();

    // Append parameters to URLSearchParams; no need to manually encode keys
    for (const [key, value] of Object.entries(params)) {
        queryString.append(key.trim(), value.toString().trim());
    }

    const url = `${path}?${queryString.toString()}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const res = await response.json();

        // Check for errors in the response data
        if (res.error) {
            throw new Error(res.error);
        }

        return res.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
}