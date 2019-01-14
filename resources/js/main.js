let result = document.querySelector(".result");
const row1 = document.querySelector(".row-1");
const row2 = document.querySelector(".row-2");
const row3 = document.querySelector(".row-3");
const row4 = document.querySelector(".row-4");
const row5 = document.querySelector(".row-5");
let nextIsOperator = false;

arrayOfOperation = [];

// write a number on the screen
function writeNumber (stringNumber) {
    if (result.innerText === "0") {
        result.innerText = stringNumber; 
    } else {
        result.innerText += stringNumber;
    }
    nextIsOperator = true;
}

// Delete last character of a string
function delLastChar (stringNumber) {
    if (result.innerText.length > 1) {
        return stringNumber.slice(0, stringNumber.length-1);
    } else {
        return "0";
    }
}

// add EventListener on row1
row1.addEventListener("click", function(event) {
    if (event.target.innerText === "C") {
        result.innerText = '0';    
        arrayOfOperation = [];
    } else if (event.target.innerText === "\u2190") {
        result.innerText = delLastChar(result.innerText);
    } else {
        if (nextIsOperator) {
            arrayOfOperation.push(result.innerText);
            arrayOfOperation.push("/");
            result.innerText = '0';
            nextIsOperator = false;
        }
    }
});

row2.addEventListener("click", function(event) {
    if (event.target.innerText === '*') {
        if (nextIsOperator) {
            arrayOfOperation.push(result.innerText);
            arrayOfOperation.push(event.target.innerText);
            result.innerText = '0';
            nextIsOperator = false;
        }
    } else {
        writeNumber(event.target.innerText);  
    }
});

row3.addEventListener("click", function(event) {
    if (event.target.innerText === "-") {
        if (nextIsOperator) {
            arrayOfOperation.push(result.innerText);
            arrayOfOperation.push(event.target.innerText);
            result.innerText = '0';
            nextIsOperator = false;
        }
    } else {
        writeNumber(event.target.innerText);  
    }
});

row4.addEventListener("click", function(event) {
    if (event.target.innerText === "+") {
        if (nextIsOperator) {
            arrayOfOperation.push(result.innerText);
            arrayOfOperation.push(event.target.innerText);
            result.innerText = '0';
            nextIsOperator = false;
        }
    } else {
        writeNumber(event.target.innerText);  
    }
});

row5.addEventListener("click", function(event) {
    if (event.target.innerText === "=") {
        arrayOfOperation.push(result.innerText);
        result.innerText = eval(arrayOfOperation.join(' '));
        arrayOfOperation = [];
    } else {
        writeNumber(event.target.innerText);  
    }
});

