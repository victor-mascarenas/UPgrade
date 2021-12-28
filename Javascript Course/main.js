const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        showMsg('Please enter all fields', 'error');
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        addToList(li);
        clearFields();
    }
}
function showMsg(text, className) {
    msg.classList.add(className);
    msg.innerHTML = text;
    setTimeout(() => msg.remove(), 3000);
}
function addToList(li) {
    userList.appendChild(li);
}
function clearFields() {
    nameInput.value = '';
    emailInput.value = '';
}

myForm.addEventListener('submit', onSubmit);