let firstNumber = '',
	secondNumber = '',
	display,
	sum,
	operator;
const historyUL= document.querySelector(".history");
	
window.onload = (() => {
	fillInNumberButtons();
	fillInOperatorButtons();
	setEventListeners();
	display = document.getElementById('display');
	setDisplayValue(0);
	document.getElementById("equals").addEventListener('click', evaluate);
	document.getElementById("allClear").addEventListener('click', () => {
		setDisplayValue(0);
		firstNumber = '';
		secondNumber = '';
	});
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
const fillInOperatorButtons = () =>{
	const operatorsContainer= document.getElementsByClassName('calculator__operators')[0];
	const operatorButtons= ["+","-","*","/","=","AC"];
	operatorButtons.forEach((string,index)=>{
	const newElement = document.createElement('div');
	newElement.className= 'calculator__operators__item';
	if (string === "AC"){
		newElement.setAttribute("id", "allClear");
		newElement.setAttribute("class", "calculator__operators__item undefinedOperator");
	}
	else if(string === "="){
		newElement.setAttribute("id", "equals");
		newElement.setAttribute("class", "calculator__operators__item undefinedOperator");
	}
	newElement.innerText= string;
	operatorsContainer.appendChild(newElement);
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
		if(event.target.className.includes('undefinedOperator')){   // when operator is "AC" or "equals" to set it to undefined so addDigitToNumbers works
			setOperator(undefined);
		}
		else if (event.target.className.includes('calculator__operators__item')) {
			setOperator(event.target.innerText);
		}
	})
};

const setOperator = (sentOperator) => {
	operator = sentOperator;
};
function evaluate() {
	if (firstNumber){
		firstNumber=eval(firstNumber);}
	if (secondNumber){
		secondNumber=eval(secondNumber);}
	if (operator === "+") {
		if (secondNumber){
			firstNumber += secondNumber;
			secondNumber = '';
			firstNumber;
			return setDisplayValue(firstNumber);
		}else if(!secondNumber){   
			firstNumber+=firstNumber;
			return setDisplayValue(firstNumber)
		}
	}
	 else if (operator === "-") {
		if(secondNumber){
			firstNumber -= secondNumber;
			secondNumber ='';
			return setDisplayValue(firstNumber);
		}else if(!secondNumber){								 
			firstNumber-=firstNumber;
			return setDisplayValue(firstNumber)
		}
	}	 else if (operator === "/") {
		if(secondNumber){
			firstNumber /= secondNumber;
			secondNumber = '';
			return setDisplayValue(firstNumber);
		}else if(!secondNumber){								 
			firstNumber/=firstNumber;
			return setDisplayValue(firstNumber)
		}
	}	 else if (operator === "*") {
		if(secondNumber){
			firstNumber *= secondNumber;
			secondNumber = '';
			return setDisplayValue(firstNumber);
		}else if(!secondNumber){								
			firstNumber *= firstNumber;
			return setDisplayValue(firstNumber)
		}
	}
	firstNumber=firstNumber.toString();
	secondNumber=secondNumber.toString();
};
