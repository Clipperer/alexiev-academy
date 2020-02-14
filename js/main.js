let firstNumber = '',
	secondNumber = '',
	display,
	operator;

window.onload = (() => {
	fillInNumberButtons();
	setEventListeners();

	display = document.getElementById('display');
	setDisplayValue(0)
});
const setEventListeners = () => {
	setDigitsListeners();
	setOperatorsListeners();
};

const fillInNumberButtons = () => {
	const buttonsContainer = document.getElementsByClassName('calculator__digits')[0];
	const buttonsDigits = new Array(10).fill(0).map((val, index) => index);
	buttonsDigits.push(buttonsDigits.shift());
	buttonsDigits.forEach((digit, index) => {
		const newElement = document.createElement('div');
		newElement.className = 'calculator__digits__item';
		if (digit === 0) {
			newElement.classList.add('calculator__digits__item--full');
		}
		newElement.innerText = digit.toString();
		buttonsContainer.appendChild(newElement);
	});
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
