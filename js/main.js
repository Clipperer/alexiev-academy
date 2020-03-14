import {setDisplayValue} from './ui/set-display-value';
import {setEventListeners} from './ui/set-listeners';
import {fillInContent} from './ui/fill-in-content';

window.onload = (() => {
	fillInContent();
	setEventListeners();
	setDisplayValue();
});

