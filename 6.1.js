const word = "Довод";
let lowerWord = word.toLowerCase().replace(/ /g, "");
let palindrom = "";
for (let index = lowerWord.length - 1; index >= 0; index-= 1){
    palindrom += lowerWord[index];
}

if (palindrom === lowerWord){
    console.log("This is palindrom!")
} else {
    console.log("Not palindrom")
}