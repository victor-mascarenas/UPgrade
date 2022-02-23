const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = (endpoint, data, method = 'GET') => {
    let res;
    const url = `${baseUrl}/${endpoint}`;
    if (method === 'GET') {
        res = fetch(url);
    } else {
        res = fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    return res;
};