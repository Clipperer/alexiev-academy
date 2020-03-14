export const setDigitsListeners = () => {
	const digits = document.getElementsByClassName('calculator__digits__item');
	Object.keys(digits).forEach((key, index) => {
		digits[key].addEventListener('click', (event) => {
			event.stopPropagation();
			addDigitToNumbers(digits[key].innerHTML)
		})
	})
};
