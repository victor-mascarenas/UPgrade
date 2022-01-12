export default class APIData {
    async getData(url: string): Promise<Object> {
        let json: Object;
        await fetch(url)
            .then((res) => res.json())
            .then((jsonR) => json = jsonR)
            .catch((error) => {
                throw `An error ocurred while fetching data from ${url}: ${error.message}`;
            });
        return json;
    }
}