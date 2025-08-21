const numbers = [2, 5, 6, 3, 4, 2, 1, 5];

function filterAndSortNumbers(arr) {
    const uniqueNumbers = [];
    for (const num of arr) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    }

    for (let i = 0; i < uniqueNumbers.length - 1; i++) {
        for (let j = 0; j < uniqueNumbers.length - i - 1; j++) {
            if (uniqueNumbers[j] > uniqueNumbers[j + 1]) {
                const temp = uniqueNumbers[j];
                uniqueNumbers[j] = uniqueNumbers[j + 1];
                uniqueNumbers[j + 1] = temp;
            }
        }
    }

    return uniqueNumbers;
}

console.log(filterAndSortNumbers(numbers));
