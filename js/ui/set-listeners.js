import {setDigitsListeners} from './set-digits-listeners';
import {setOperatorsListeners} from './set-operators-listeners';
import {setDisplayValue} from './set-display-value';

export const setEventListeners = () => {
	setDigitsListeners();
	setOperatorsListeners();
	document.getElementById("equals").addEventListener('click', evaluate);
	document.getElementById("allClear").addEventListener('click', () => {
		setDisplayValue();
	});
};
