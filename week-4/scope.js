let outerVar = "outer";

const myFunc = (string) => {
    console.log(outerVar);
    return "bananas";
}

const newString = myFunc();
console.log(newString, outerVar);
