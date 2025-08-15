const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (key in obj){
    if (!Array.isArray(obj[key])){
        arrValues.push(obj[key]);
    } else if (Array.isArray(obj[key])){
        for (value of obj[key]){
            arrValues.push(value);
        }
    }
        
}

console.log(arrValues);