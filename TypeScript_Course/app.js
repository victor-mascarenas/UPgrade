var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR"; //2
})(Role || (Role = {}));
;
//const person:object = {
/* const person: {
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string];//tupla
} = { */ //same as object
var person = {
    name: 'Maximilium',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    //role: [2, 'author']
    role: Role.AUTHOR
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
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
