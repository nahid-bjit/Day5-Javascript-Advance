// ## Example - 1 with the number ##

const dummmyArray = [2, 4, 6, 7, 8];

const reducedValue = dummmyArray.reduce(
    (totalValue, currentValue) => totalValue + currentValue, 10
);

console.log ("Our reducedValue will be ", reducedValue);

// ## Example with the character arry ##

// const dummyCharArray = ["a", "b", "c"];

// const reducedValue = dummyCharArray.reduce((totalValue, currentValue) => {
//     const calculateMult = totalValue + currentValue;
//     return calculateMult;
// });

// console.log("Our reducedValue will be ", reducedValue)