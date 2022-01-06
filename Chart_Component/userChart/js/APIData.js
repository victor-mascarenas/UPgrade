export default class APIData {
    getData(url) {
        return fetch(url)
            .then((res) => res.json())
            .catch((error) => {
                console.log(`Error: ${error.message}`);
            });
    }
}