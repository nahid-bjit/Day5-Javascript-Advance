// ## Regular method ## 

function displayFunc(sum) {
    console.log("It is daispaling some values", sum);
}

function sumFunc (x,y) {
    const sum = x+y;

    displayFunc(sum)
}

sumFunc(10,5);


// ## Callback method ## 


function displayFunc(sum) {
    console.log("It is dispaling some values", sum);
}

function sumFunc (x,y, callBackFunc) {
    const sum = x+y;

    callBackFunc(sum)
}

sumFunc(10,5, displayFunc);

// ## Even Odd callback ##

function displayEvenNumber (sum) {
    console.log("This message will be for even number: ", sum);
}

function displayOddNumber (sum) {
    console.log("This message will be for odd number: ", sum);
}

function displayZeroNumber (sum) {
    console.log ("This message will be for zero number: ", sum)
}

function sumFunc (x, y, ourEvenCallback, ourOddCallback, ourZeroCallback) {
    const sum = x+y;
    
    if (sum == 0) {
        ourZeroCallback(sum);
    }
    else if (sum % 2 ==1) {
        ourOddCallback(sum);
    }
    else {
        ourEvenCallback(sum)
    }
    
    // sum % 2 == 1 ? ourOddCallback (sum) : ourEvenCallback (sum);
}

sumFunc(0, 0, displayEvenNumber, displayOddNumber, displayZeroNumber)

// ## Javascript Map ## 
