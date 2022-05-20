/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(){
    this.sum = function(num1, num2){
        return num1 + num2
    }
    this.subtraction = function(num1, num2){
        return num1 - num2
    }
    this.multiplication = function(num1, num2){
        return num1 * num2
    }
    this.division = function(num1, num2){
        return num1 / num2
    }

}

const myCalculator = new Calculator ()

// console.log(myCalculator.sum(2,2))
// console.log(myCalculator.subtraction(2,2))
// console.log(myCalculator.multiplication(2,2))
// console.log(myCalculator.division(2,2))
