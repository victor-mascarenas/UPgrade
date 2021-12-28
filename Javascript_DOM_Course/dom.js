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
/* var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (let element of odd) {
    element.style.background = '#f4f4f4';
}
for (let element of even) {
    element.style.background = '#ccc';
} */

//Traversing the DOM
//var itemsList = document.querySelector('#items');
/* console.log(itemsList.parentNode);//Parent node of UL
itemsList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemsList.parentNode.parentNode.parentNode); */

/* console.log(itemsList.parentElement);//Parent node of UL
itemsList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemsList.parentElement.parentElement.parentElement); */

//Child nodes
/* console.log(itemsList.childNodes);
console.log(itemsList.children);
console.log(itemsList.children[1]);
itemsList.children[1].style.backgroundColor = 'yellow'; */

//first child
//console.log(itemsList.firstChild);

//Element child
//console.log(itemsList.firstElementChild);
//itemsList.firstElementChild.textContent = 'Hello 1';

//last child
//console.log(itemsList.lastChild);

//last element child
//console.log(itemsList.lastElementChild);
//itemsList.lastElementChild.textContent = 'Hello 1';

//Next sibling
//console.log(itemsList.nextSibling);

//Next element sibling
//console.log(itemsList.nextElementSibling);

//Previous sibling
//console.log(itemsList.previousSibling);

//Previous element sibling
//console.log(itemsList.previousElementSibling);
//itemsList.previousElementSibling.style.color = 'green';

//Create element
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');

//Create text node
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';