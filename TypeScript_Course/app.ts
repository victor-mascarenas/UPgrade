enum Role {
    ADMIN,//0
    //ADMIN = 5,//Setting value
    READ_ONLY,//1
    AUTHOR//2
};

//const person:object = {
/* const person: {
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string];//tupla
} = { */ //same as object
const person = {
    name: 'Maximilium',
    age: 30,
    hobbies: ['Sports', 'Cooking'],//String array
    //role: [2, 'author']
    role: Role.AUTHOR
}

//person.role.push('admin');//TS doesnt check this
//person.role[1] = 10;
//person.role = [0, 'admin', 'user'];//Error, lenght has to be 2

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

if (person.role === Role.AUTHOR) {
    console.log('is author');
}