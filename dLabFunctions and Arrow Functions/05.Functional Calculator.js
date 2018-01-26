function Calculator(input) {
    let a = Calculator.arguments[0];
    let b = Calculator.arguments[1];
    let operation = Calculator.arguments[2];
    let sum = function (a, b) {return a + b};
    let division = function (a, b) {return a / b};
    let multiplication = function(a, b){return a * b};
    let subtraction=function (a,b) {return Math.abs(a-b)};

    if(operation==="+"){
        return sum(a,b);
    }else if(operation==="/"){
        return division(a,b);
    }else if(operation==="*"){
        return multiplication(a,b);
    }else if(operation==="-"){
        return subtraction(a,b);
    }

}
console.log(Calculator(1, -1, '-'));