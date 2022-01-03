//const person:object = {
var person = {
    //const person = {
    name: 'Maximilium',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
//person.role.push('admin');//TS doesnt check this
//person.role[1] = 10;
//person.role = [0, 'admin', 'user'];//Error, lenght has to be 2
var favoriteActivities;
//favoriteActivities = ['sports', 1];//Error, is string array
favoriteActivities = ['Sports'];
//let favoriteActivities:any[];
//favoriteActivities = ['sports', 1];//No error
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) { //TypeScript knows 'hobby' is gonna be a string, because of the types
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map());//Error
}
