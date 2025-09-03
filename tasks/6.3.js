const input = prompt("Введите любое число:");
let inputTypeOfNumber = +input;

const newArr = [];

for (let i=1; i <= inputTypeOfNumber; i++){
    newArr.push(i);
}

alert(`[${newArr.toString()}]`)
