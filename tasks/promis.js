const firstPromis = new Promise((resolve, reject) => {
    let value = Math.random(0, 1);
    setTimeout(() => {
        if (value >= 0.5){
            reject("В первом промиссе ошибка");
        } else {
            resolve(2);
        };
    }, 2000)}
);
const TwoPromis = new Promise((resolve, reject) => {
    let value = Math.random(0, 1);
    setTimeout(() => {
        if (value >= 0.5){
            reject("В втором промиссе ошибка");
        } else {
            resolve(1);
        };
    }, 1000)}
);
const ThreePromis = new Promise((resolve, reject) => {
    let value = Math.random(0, 1);
    setTimeout(() => {
        if (value >= 0.5){
            reject("В третьем промиссе ошибка");
        } else {
            resolve(3);
        };
    }, 3000)}
);


Promise.all([firstPromis, TwoPromis, ThreePromis]).then(res => {
    let sumResult = 0;
    for(num of res){
        sumResult += num;
    };
    console.log("Сумма промиссов:" + sumResult);
}).catch(res => console.log(res))