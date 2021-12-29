//Calling functions

function foo () {//Global object
    console.log('Hello');
    //console.log(this);
}
foo();//Method 1: normal

var obj = {prop: 'This is the object itself!'};

obj.foo = function () {//Object context
    console.log('Hello');
    //console.log(this);
}

obj.foo();//Method 2: as an object property

new foo();//Method 3: as a constructor

//Method 4