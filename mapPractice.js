// ## example - 1 ##

const dummmyArray = [2, 4, 6, 7, 8];

const mappedArray = dummmyArray.map((x) => x + 1);

console.log ("our mapped array: ", mappedArray)


// ## Example - 2 - Object ## 

const dummyArrayOfObjects = [
    {
        color: 'red',
        count: 12,
    },
    {
        color: 'blue',
        count: 22,
    },
    {
        color: 'purple',
        count: 32,
    },
]

// const mappedArray = dummmyArray.map((x) => x + 1);
const mappedObject = dummyArrayOfObjects.map(obj => 
{
    obj.count+=10;
    return obj;
}
)

// console.log ("our mapped array: ", mappedArray);
console.log("Ouro mapped object array: ", mappedObject);