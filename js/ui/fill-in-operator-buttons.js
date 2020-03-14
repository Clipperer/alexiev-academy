export const fillInOperatorButtons = () => {
	const operatorsContainer = document.getElementsByClassName('calculator__operators')[0];
	const operatorButtons = ["+", "-", "*", "/", "=", "AC"];
	operatorButtons.forEach((string, index) => {
		const newElement = document.createElement('div');
		newElement.className = 'calculator__operators__item';
		if (string === "AC") {
			newElement.setAttribute("id", "allClear");
			newElement.setAttribute("class", "calculator__operators__item undefinedOperator");
		} else if (string === "=") {
			newElement.setAttribute("id", "equals");
			newElement.setAttribute("class", "calculator__operators__item undefinedOperator");
		}
		newElement.innerText = string;
		operatorsContainer.appendChild(newElement);
	});
};
