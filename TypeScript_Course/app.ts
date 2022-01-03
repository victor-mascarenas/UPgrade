//const person:object = {
/* const person: {
    name:string;
    age:number;
} = { *///same as object
const person = {
    name: 'Maximilium',
    age: 30,
    hobbies: ['Sports', 'Cooking']//String array
}

let favoriteActivities:string[];
//favoriteActivities = ['sports', 1];//Error, is string array
favoriteActivities =['Sports'];
//let favoriteActivities:any[];
//favoriteActivities = ['sports', 1];//No error

console.log(person.name);

for (const hobby of person.hobbies) {//TypeScript knows 'hobby' is gonna be a string, because of the types
    console.log(hobby.toUpperCase());
    //console.log(hobby.map());//Error
}