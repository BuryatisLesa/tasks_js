function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return NaN;
    }
}


const obj = { a: 2, b: 3, operator: "+" };

const result = calculate.apply(obj, [2, 3, "+"]);

console.log(result);
