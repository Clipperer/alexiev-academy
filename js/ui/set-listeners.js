import {setDigitsListeners} from './set-digits-listeners';
import {setOperatorsListeners} from './set-operators-listeners';
import {setDisplayValue} from './set-display-value';
import {calcInstance} from '../classes/calculator.class';

export const setEventListeners = () => {
	setDigitsListeners();
	setOperatorsListeners();
	document.getElementById("equals").addEventListener('click', (e) => calcInstance.evaluate());
	document.getElementById("allClear").addEventListener('click', () => {
		setDisplayValue();
	});
};
