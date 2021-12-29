document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);
function loadUser () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            let user = JSON.parse(this.responseText);
            let output = `<ul><li>${user.id}</li><li>${user.name}</li><li>${user.email}</li></ul>`;
            document.getElementById('user').innerHTML = output;
        }
    }
    xhr.send();
}
function loadUsers () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            let users = JSON.parse(this.responseText);
            let output = '';
            for (let user of users) {
                output += `<ul><li>${user.id}</li><li>${user.name}</li><li>${user.email}</li></ul>`;
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}