//Calling functions

function foo () {//Global object
    console.log('Hello');

    this.abc = def;
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

foo.call({})//Method 4: with call. It binds 'this.abc' to de object passed as an argument for 'call'