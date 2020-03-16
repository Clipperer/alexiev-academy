import {setDisplayValue} from '../ui/set-display-value';

export class Calculator {

	constructor() {
		this.firstNumber = '';
		this.secondNumber = '';
		this.operator = '';
	}

	addDigitToNumbers (value) {
		value = parseInt(value).toString();
		if (this.operator) {
			this.secondNumber += value.toString();
		} else {
			this.firstNumber += value.toString();
		}
		setDisplayValue(this.operator ? this.secondNumber : this.firstNumber);
	};

	evaluate() {
		if (this.firstNumber) {
			this.firstNumber = parseInt(this.firstNumber);
		}
		if (this.secondNumber) {
			this.secondNumber = parseInt(this.secondNumber);
		}
		if (this.operator === "+") {
			if (this.secondNumber) {
				this.firstNumber += this.secondNumber;
				this.secondNumber = '';
				this.firstNumber;
				return setDisplayValue(this.firstNumber);
			} else if (!this.secondNumber) {
				this.firstNumber += this.firstNumber;
				return setDisplayValue(this.firstNumber)
			}
		} else if (this.operator === "-") {
			if (this.secondNumber) {
				this.firstNumber -= this.secondNumber;
				this.secondNumber = '';
				return setDisplayValue(this.firstNumber);
			} else if (!this.secondNumber) {
				this.firstNumber -= this.firstNumber;
				return setDisplayValue(this.firstNumber)
			}
		} else if (this.operator === "/") {
			if (this.secondNumber) {
				this.firstNumber /= this.secondNumber;
				this.secondNumber = '';
				return setDisplayValue(this.firstNumber);
			} else if (!this.secondNumber) {
				this.firstNumber /= this.firstNumber;
				return setDisplayValue(this.firstNumber)
			}
		} else if (this.operator === "*") {
			if (this.secondNumber) {
				this.firstNumber *= this.secondNumber;
				this.secondNumber = '';
				return setDisplayValue(this.firstNumber);
			} else if (!this.secondNumber) {
				this.firstNumber *= this.firstNumber;
				return setDisplayValue(this.firstNumber)
			}
		}
		this.firstNumber = this.firstNumber.toString();
		this.secondNumber = this.secondNumber.toString();
	}

	setOperator(sentOperator) {
		this.operator = sentOperator;
	};
}

export const calcInstance = new Calculator();

