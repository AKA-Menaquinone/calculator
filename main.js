let firstNumber = '';
let secondNumber = '';
let operator = undefined;

function operate(first, operator, second) {
    switch (operator) {
        case 'add':
            return first + second;
            break;
        case 'subtract':
            return first - second;
            break;
        case 'multiply':
            return first * second;
            break;
        case 'divide':
            return first / second;
            break;
        default:
            return second;
    }
}

const display = document.querySelector('.display');

const numberKeys = document.querySelectorAll('.number');
numberKeys.forEach((keys) => {
    keys.addEventListener('click', () => {
        firstNumber += keys.id;
        display.textContent = firstNumber;
    })
})

const operatorKeys = document.querySelectorAll('.operator');
operatorKeys.forEach((keys) => {
    keys.addEventListener('click', () => {
        if (firstNumber === '') {
            
        } else if (secondNumber === '') {
            secondNumber = firstNumber;
            firstNumber = '';
            operator = keys.id;
        } else {
            secondNumber = operate(parseInt(secondNumber), operator, parseInt(firstNumber)).toFixed(2);
            firstNumber = '';
            display.textContent = secondNumber;
            operator = keys.id;
        }
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