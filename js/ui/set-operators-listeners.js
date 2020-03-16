import {calcInstance} from '../classes/calculator.class';

export const setOperatorsListeners = () => {
	document.addEventListener('click', (event) => {
		if (event.target.className.includes('undefinedOperator')) {   // when operator is "AC" or "equals" to set it to undefined so addDigitToNumbers works
			calcInstance.setOperator(undefined);
		} else if (event.target.className.includes('calculator__operators__item')) {
			calcInstance.setOperator(event.target.innerText);
		}
	})
};
