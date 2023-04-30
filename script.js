const bodyElement = document.body;
const screenCurrent = document.querySelector('.screen__current  ');
const screenPrevious = document.querySelector('.screen__previous');
const btnsNumbers = document.querySelectorAll('.buttons__number');
const btnsOperations = document.querySelectorAll('.buttons__operation');
const btnClean = document.getElementById('clean');
const bntDelete = document.getElementById('delete');
const btnPercent = document.getElementById('percent');
const bntDivide = document.getElementById('divide');
const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');
const btnMultiply = document.getElementById('multiply');
const btnFour = document.getElementById('four');
const btnFive = document.getElementById('five');
const btnSix = document.getElementById('six');
const btnSum = document.getElementById('sum');
const btnSeven = document.getElementById('seven');
const btnEight = document.getElementById('eight');
const btnNine = document.getElementById('nine');
const btnSubstract = document.getElementById('minus');
const btnDot = document.getElementById('dot');
const btnZero = document.getElementById('zero');
const btnEqual = document.getElementById('equal');
//
// Functionality of number buttons.
//
bodyElement.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (isFinite(event.key)) {
    screenCurrent.textContent += event.key;
  } else if (event.key == 'Backspace') {
    screenCurrent.textContent = [...screenCurrent.textContent].slice(0, this.length - 1).join('');
  }
});

bodyElement.addEventListener('click', (event) => {
  switch (event.target) {
    case btnOne:
      screenCurrent.textContent += 1;
      break;
    case btnTwo:
      screenCurrent.textContent += 2;
      break;
    case btnThree:
      screenCurrent.textContent += 3;
      break;
    case btnFour:
      screenCurrent.textContent += 4;
      break;
    case btnFive:
      screenCurrent.textContent += 5;
      break;
    case btnSix:
      screenCurrent.textContent += 6;
      break;
    case btnSeven:
      screenCurrent.textContent += 7;
      break;
    case btnEight:
      screenCurrent.textContent += 8;
      break;
    case btnNine:
      screenCurrent.textContent += 9;
      break;
    case btnZero:
      screenCurrent.textContent += 0;
      break;
    case btnDot:
      screenCurrent.textContent += '.';
      break;
    default:
      break;
  }
  btnsNumbers.forEach((item) => (item.disabled = true));
  // btnsOperations.forEach((item) => (item.disabled = false));
});

//
// Operation functionality
//

let operator, numbers, result;
bodyElement.addEventListener('click', (event) => {
  switch (event.target) {
    case btnClean:
      screenCurrent.textContent = '';
      screenPrevious.textContent = '';
      break;
    case bntDelete:
      screenCurrent.textContent = [...screenCurrent.textContent].slice(0, this.length - 1).join('');
      break;
    case btnPercent:
      screenCurrent.textContent += '%';
      operator = '%';
      break;
    case bntDivide:
      screenCurrent.textContent += '÷';
      operator = '/';
      break;
    case btnMultiply:
      screenCurrent.textContent += '*';
      operator = '*';
      break;
    case btnSum:
      screenCurrent.textContent += '+';
      operator = '+';
      break;
    case btnSubstract:
      screenCurrent.textContent += '-';
      operator = '-';
      break;

    case btnEqual:
      numbers = screenCurrent.textContent.split(/\W+/);

      switch (operator) {
        case '%':
          result = Number(numbers[0]) * (0.01 * Number(numbers[1]));
          break;
        case '/':
          result = Number(numbers[0]) / Number(numbers[1]);
          break;
        case '*':
          result = Number(numbers[0]) * Number(numbers[1]);
          break;
        case '+':
          result = Number(numbers[0]) + Number(numbers[1]);
          break;
        case '*':
          result = Number(numbers[0]) * Number(numbers[1]);
          break;
        case '-':
          result = Number(numbers[0]) - Number(numbers[1]);
          break;

        default:
          console.log('nope');
          break;
      }

      if (!Number.isInteger(result)) result = result.toFixed(2);
      screenCurrent.textContent = result;
  }
  btnsNumbers.forEach((item) => (item.disabled = false));
  // btnsOperations.forEach((item) => (item.disabled = true));
});
