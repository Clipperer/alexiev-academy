const display = document.getElementById('display');

export const setDisplayValue = (value) => {
	display.value = value ? value : 0;
};
