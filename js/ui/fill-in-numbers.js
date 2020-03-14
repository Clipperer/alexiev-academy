export const fillInNumberButtons = () => {
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
