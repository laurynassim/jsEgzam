/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(num1, num2){
    this.firstNumber = num1;
    this.secondNumber = num2;
    this.sum = function(){
        return this.firstNumber + this.secondNumber
    }
    this.subtraction = function(){
        return this.firstNumber - this.secondNumber
    }
    this.multiplication = function(){
        return this.firstNumber * this.secondNumber
    }
    this.division = function(){
        return this.firstNumber / this.secondNumber
    }

}

const myCalculator = new Calculator (10, 5)

console.log(myCalculator.sum())
console.log(myCalculator.subtraction())
console.log(myCalculator.multiplication())
console.log(myCalculator.division())
