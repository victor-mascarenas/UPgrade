//DOM
console.log(window);//Window parent object

//Element selectors
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));
const items = document.querySelectorAll('.item');
console.log(items);//Node list
console.log(document.getElementsByClassName('item'));//HTML collection

items.forEach((item) => {
    console.log(item);
});

//Manipulating DOM
const ul = document.querySelector('.items');
//ul.remove();//removes all
//ul.lastElementChild.remove();//removes last item
/* ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; */

const btn = document.querySelector('.btn');
//btn.style.background = 'red';
btn.addEventListener('click', (e) => {//mouseover, mouseout, etc.
    e.preventDefault();
    //console.log(e.target.className);
    //console.log('click');
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});