const users = [
    {name: "Mike", age: 18},
    {name: "Alex", age: 20},
    {name: "Eddy", age: 17},
    {name: "Roy", age: 16},
]

const usersLineAge = users
    .filter(user => user.age >= 18)
    .map(user => user.name);

console.log(usersLineAge);

const names = users.map(user => user.name);

console.log(names);
