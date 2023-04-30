const bodyElement = document.body;
const screenCurrent = document.querySelector('.screen__current  ');
const screenPrevious = document.querySelector('.screen__previous');
const btnClean = document.getElementById('clean');
const bntDelete = document.getElementById('delete');
const btnPercent = document.getElementById('percent');
const bntDivive = document.getElementById('divide');
const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');
const btnMultiply = document.getElementById('multiply');
const btnFour = document.getElementById('four');
const btnFive = document.getElementById('Five');
const btnSix = document.getElementById('six');
const btnSum = document.getElementById('sum');
const btnSeven = document.getElementById('seven');
const btnEight = document.getElementById('eight');
const btnNine = document.getElementById('nine');
const btnDot = document.getElementById('dot');
const btnZero = document.getElementById('zero');
const btnEqual = document.getElementById('equal');
const btnsNumbers = document.querySelectorAll('.buttons__number');
//
// Functionality of number buttons.
//
bodyElement.addEventListener('click', (event) => {
  // if (event.target === btnOne) {
  //   console.log('hey');
  switch (event.target) {
    case btnOne:
      screenCurrent.textContent = 1;
      break;
    case btnTwo:
      screenCurrent.textContent = 2;
      break;
    case btnThree:
      screenCurrent.textContent = 3;
      break;
    case btnFour:
      screenCurrent.textContent = 4;
      break;
    case btnFive:
      screenCurrent.textContent = 5;
      break;
    case btnSix:
      screenCurrent.textContent = 6;
      break;
    case btnSeven:
      screenCurrent.textContent = 7;
      break;
    case btnEight:
      screenCurrent.textContent = 8;
      break;
    case btnNine:
      screenCurrent.textContent = 9;
      break;
    default:
      break;
  }
  btnsNumbers.forEach((item) => (item.disabled = true));
});

//
// Operation functionality
//
bodyElement.addEventListener('click', (event) => {
  switch (event.target) {
    case btnClean:
      screenCurrent.textContent = '0';
      screenPrevious.textContent = ' ';
      console.log('hey');
  }
});
