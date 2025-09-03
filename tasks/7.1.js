
const person = { name: "John Wick", age:28 };

function printInfo() {
    console.log(this.name, this.age);
}


printInfo.call(person);