let firstNumber = [];
let secondNumber = [];
let operator = undefined;
let result = undefined;

function addition (x, y) {
    return x + y;
}

function subtraction (x, y) {
    return x - y;
}

function multiplication (x, y) {
    return x * y;
}

function division (x, y) {
    return x / y;
}

const numberKeys = document.querySelectorAll('.number');
numberKeys.forEach((keys) => {
    keys.addEventListener('click', () => {
        firstNumber.push(keys.id);
        console.log(firstNumber);
    })
})

const operatorKeys = document.querySelectorAll('.operator');
operatorKeys.forEach((keys) => {
    keys.addEventListener('click', () => {
        secondNumber = firstNumber;
        firstNumber = [];
    })
})

const additionKey = document.querySelector('#add');
additionKey.addEventListener('click', () => {
    operator = 'add';
})

const subtractionKey = document.querySelector('#subtract');
subtractionKey.addEventListener('click', () => {
    operator = 'subtract';
})

const multiplicationKey = document.querySelector('#multiply');
multiplicationKey.addEventListener('click', () => {
    operator = 'multiply';
})

const divisionKey = document.querySelector('#divide');
divisionKey.addEventListener('click', () => {
    operator = 'divide';
})