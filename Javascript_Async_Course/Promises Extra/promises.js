//Exercise 1
/* let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

//Exercise 2
p.then((message) => {
    console.log(`This is in the then: ${message}`);
})
.catch((message) => {
    console.log(`This is in catch: ${message}`);
}); */

/* const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
    let promise = new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Cat'
            });
        } else {
            resolve('Thumbs Up!');
        }
    });
    return promise;
}
watchTutorialPromise().then((message) => {
    console.log(`Success: ${message}`);
})
.catch((error) => {
    console.log(`${error.name}: ${error.message}`);
}); */

//Exercise 3
const url = 'https://fakerapi.it/api/v1/custom?_quantity=1&id=number&name=country&code=countryCode&population=number&customfield3=phone';

function getData() {
    let promise = new Promise(async (resolve, reject) => {
        let resolved = true;
        const data = await fetch(url)
            .then((res) => res.json())
            .catch(() => {
                resolved = false;
            });
        if (resolved) {
            resolve(data);
        } else {
            reject(`Error while fetching data from: ${url}`);
        }
    });
    return promise;
}
getData()
    .then((data) => {
        console.log(data);
    })
    .catch((message) => {
        console.log(`Error message: ${message}`);
    });