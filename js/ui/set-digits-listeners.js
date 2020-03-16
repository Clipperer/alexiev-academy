import {calcInstance} from '../classes/calculator.class';

export const setDigitsListeners = () => {
	const digits = document.getElementsByClassName('calculator__digits__item');
	Object.keys(digits).forEach((key, index) => {
		digits[key].addEventListener('click', (event) => {
			event.stopPropagation();
			calcInstance.addDigitToNumbers(digits[key].innerHTML)
		})
	})
};
