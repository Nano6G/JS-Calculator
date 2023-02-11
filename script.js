/*eslint-env es6*/

let number_entered = "";
let numbers = [];
var result;

function addNumber(number) {
    number_entered += number.toString();
    logNumber();
}

function clearNumber() {
    number_entered = "";
    logNumber();
}

function remove() {
    if (number_entered.length > 0) {
        number_entered = number_entered.substring(0, number_entered.length-1);
    }
    else if (typeof numbers[numbers.length] != number) {
        numbers.pop();
    }
    logNumber();
}

function decimal(){
    number_entered += ".";
    logNumber();
}

function operate(operation) {
    if (typeof numbers[numbers.length] == number) {
        return
    }
    
    current_entry = parseFloat(number_entered);
    if (!isNaN(current_entry)) {
        numbers.push(current_entry);
    }
    operationLengthCheck()
    numbers.push(operation);
    number_entered = "";

function operationLengthCheck() {
    numbers_entered = numbers.length;

    if (numbers_entered % 3 == 0) {
        equals()
    }
}

function equals(){
    current_entry = parseFloat(number_entered);
    if (!isNaN(current_entry)) {
        numbers.push(current_entry);
    }
    for (var i = 0; i < numbers.length; i++){
        if (numbers[i] == "+") {
            result = numbers[i-1] + numbers[i+1];
        }
        if (numbers[i] == "-") {
            result = numbers[i-1] - numbers[i+1];
        }
        if (numbers[i] == "x") {
            result = numbers[i-1] * numbers[i+1];
        }
        if (numbers[i] == "/") {
            result = numbers[i-1] / numbers[i+1];
        }
    }
    clearNumber();
    logNumber();
    logResult();
    
    numbers = []
    numbers.push(result);
}

function logNumber(){
    document.getElementById("number").innerHTML = number_entered;
}

function logResult(){
    document.getElementById("finalNumber").innerHTML = result;
    document.getElementById("number").innerHTML = result;
    
}