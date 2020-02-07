console.log('Hello Git!')

let firstNumber = '',
	secondNumber = '',
	display,
	operator;

window.onload = (() => {
	setEventListeners();

	display = document.getElementById('display');
	setDisplayValue(0)
});
const setEventListeners = () => {
	setDigitsListeners();
	setOperatorsListeners();
};

const addDigitToNumbers = (value) => {
	value = parseInt(value).toString();
	if (operator) {
		secondNumber += value.toString();
	} else {
		firstNumber += value.toString();
	}
	setDisplayValue(operator ? secondNumber : firstNumber);
};

const setDisplayValue = (value) => {
	display.value = value
};

const setDigitsListeners = () => {
	const digits = document.getElementsByClassName('calculator__digits__item');
	Object.keys(digits).forEach((key, index) => {
		digits[key].addEventListener('click', (event) => {
			event.stopPropagation();
			addDigitToNumbers(digits[key].innerHTML)
		})
	})
};

const setOperatorsListeners = () => {
	document.addEventListener('click', (event) => {
		if (event.target.className.includes('calculator__operators__item')) {
			setOperator(event.target.innerText);
		}
	})
};

const setOperator = (sentOperator) => {
	operator = sentOperator;
};
