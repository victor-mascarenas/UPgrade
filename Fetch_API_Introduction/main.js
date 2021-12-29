document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);
function getText() {
    fetch('sample.txt')
        .then((res) => {
            //console.log(res);
            return res.text();//res.json() for json content
        })
        .then((data) => {
            //console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => console.log(err));
}
function getUsers() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Users</h2>';
            //console.log(data);
            data.forEach(user => {
                output += `
                    <ul class="list-group mb-3">
                        <li class="list-group-item">ID: ${user.id}</li>
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">eMail: ${user.email}</li>
                    </ul>
                `;
            });
            document.getElementById('output').innerHTML = output;
        });
}
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Posts</h2>';
            //console.log(data);
            data.forEach(post => {
                output += `
                    <div class="card card-body mb-3">
                        <h3 class="mb-4">${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        });
}
function addPost(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title:title,body:body})
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}