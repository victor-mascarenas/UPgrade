//Examination of document object
/* console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

document.all[10].textContent = 'Hello';
console.log(document.forms);
console.log(document.links); */

/* var header = document.getElementById('main-header');
var headerTitle = document.getElementById('header-title'); */
/* console.log(header);
header.textContent = 'Hello';
header.innerHTML = 'Goodbye';
console.log(header.textContent);
console.log(header.innerText); *///Pays attention to the style

//header.style.borderBottom = 'solid 3px #000';

//Elements by className
/* var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
for(var item of items) {
    item.style.backgroundColor = 'gray';
} */

//Elements by tagName
/* var items = document.getElementsByTagName('li');
console.log(items);
console.log(items[2]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
for(var li of items) {
    li.style.backgroundColor = 'gray';
} */

//Query selector
/* var header = document.querySelector('#main-header');
console.log(header);
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type=submit]');
submit.value = "Send";

var items = document.querySelector('.list-group-item');
items.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral'; */

//Query selector all
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (let element of odd) {
    element.style.background = '#f4f4f4';
}
for (let element of even) {
    element.style.background = '#ccc';
}