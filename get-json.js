async function getJSON(path = '', params = {}) {
    const queryString = new URLSearchParams();

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

        if (res.error) {
            throw new Error(res.error);
        }

        return res.data;
    } catch (error) {
        throw error;
    }
}