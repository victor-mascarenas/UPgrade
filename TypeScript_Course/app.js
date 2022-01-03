//const person:object = {
/* const person: {
    name:string;
    age:number;
} = { */ //same as object
var person = {
    name: 'Maximilium',
    age: 30,
    hobbies: ['Sports', 'Cooking'] //String array
};
var favoriteActivities;
//favoriteActivities = ['sports', 1];//Error, is string array
favoriteActivities = ['Sports'];
//let favoriteActivities:any[];
//favoriteActivities = ['sports', 1];//No error
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
