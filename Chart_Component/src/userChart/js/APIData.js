export default class APIData {
    getData(url) {
        return fetch(url)
            .then((res) => res.json())
            .catch((error) => {
                throw `An error ocurred while fetching data from ${url}: ${error.message}`;
            });
    }
}