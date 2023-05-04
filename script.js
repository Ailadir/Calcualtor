'use strict';
const bodyElement = document.body;
const screenCurrent = document.querySelector('.screen__current  ');
const screenPrevious = document.querySelector('.screen__previous');
const btnClean = document.getElementById('clean');
const btnDelete = document.getElementById('delete');
const btnEqual = document.getElementById('equal');
const btnsOperations = document.querySelectorAll('.math');
const operatEl = document.querySelectorAll('.buttons__number, .math, .buttons__operation__clean');

let operator, numbers, result;
operator = '';

//
//  Functions to calculate result
//
const calc = function () {
  // Using key : value for all operations
  const operations = {
    '%': function (a, b) {
      return a * (0.01 * b);
    },
    '+': function (a, b) {
      return a + b;
    },
    '-': function (a, b) {
      return a - b;
    },
    '*': function (a, b) {
      return a * b;
    },
    '/': function (a, b) {
      return a / b;
    },
  };
  // Using saved operatorion sign from event listener and get math calculation that we need, but before that we convert string into numbers.
  result = operations[operator](Number(numbers[0]), Number(numbers[1]));
  if (!Number.isInteger(result)) result = result.toFixed(2);
  // Updating screen result
  screenCurrent.textContent = result;
  // Reset
  operator = '';
};

//
// Code for typing numbers with keyboard
bodyElement.addEventListener('keydown', (event) => {
  if (isFinite(event.key)) {
    screenCurrent.textContent += event.key;
  }
  // Add backspace keyboard button as functionality
  else if (event.key == 'Backspace') {
    screenCurrent.textContent = [...screenCurrent.textContent].slice(0, this.length - 1).join('');
  }
  //Add this line to update numbers array when someone using keyobard for that
  numbers = screenCurrent.textContent.split(/[%\/*+-]/);
});

//
// Code for updating numbers, add operations and clear/delete.
operatEl.forEach((item) =>
  item.addEventListener('click', (event) => {
    // Checking if we need to get reesult when typing math operation button or equal button
    // First 'IF' part is help to working with first negative value(if you got it from last operations)
    if (
      Array.from(btnsOperations).includes(event.target) &&
      operator !== '' &&
      numbers[0].includes('') &&
      numbers.length === 3
    ) {
      screenPrevious.textContent = screenCurrent.textContent;
      numbers.shift();
      numbers[0] = Number(numbers[0]) * -1;
      calc();
    }
    //  Second part with 'Else if' working in all other cases(If first number is not negative)
    else if (
      Array.from(btnsOperations).includes(event.target) &&
      operator !== '' &&
      numbers[1].includes('') &&
      numbers.length === 2
    ) {
      screenPrevious.textContent = screenCurrent.textContent;
      calc();
    } else {
      // If for updating screen with numbers that person typing
      if (Number(event.target.textContent) || event.target.textContent === '.' || event.target.textContent === '0') {
        screenCurrent.textContent += event.target.textContent;
      }

      // Delete button functionality
      else if (event.target == btnDelete) {
        screenCurrent.textContent = [...screenCurrent.textContent].slice(0, this.length - 1).join('');
      }

      // Clear button functionality
      else if (event.target === btnClean) {
        operator = '';
        screenCurrent.textContent = '';
        screenPrevious.textContent = '';
      }

      // Code to update operator and change it if person deside to use another
      // Only if screen is not empty, and user click on operation button
      else if (
        Number(event.target.textContent) !== NaN &&
        event.target.textContent !== '0' &&
        screenCurrent.textContent
      ) {
        // if (operator !== '' && /[+\-*\/%]/.test(screenCurrent.textContent)) {
        //   operator = '';
        //   screenCurrent.textContent = [...screenCurrent.textContent].slice(0, this.length - 1).join('');
        // }
        screenCurrent.textContent += event.target.textContent;
        operator = event.target.textContent;
      }
      numbers = screenCurrent.textContent.split(/[%\/*+-]/);
    }
  })
);
