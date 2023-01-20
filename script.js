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

function add(){
    if (typeof numbers[numbers.length] != number) {
        current_entry = parseFloat(number_entered);
        if (!isNaN(current_entry)) {
            numbers.push(current_entry);
        }
        numbers.push("+");
        number_entered = "";
        operationLengthCheck()
    }
}

function minus(){
    if (typeof numbers[numbers.length] != number) {
        current_entry = parseFloat(number_entered);
        if (!isNaN(current_entry)) {
            numbers.push(current_entry);
        }
        numbers.push("-");
        number_entered = "";
        operationLengthCheck()
    }
}

function multiply(){
    if (typeof numbers[numbers.length] != number) {
        current_entry = parseFloat(number_entered);
        if (!isNaN(current_entry)) {
            numbers.push(current_entry);
        }
        numbers.push("x");
        number_entered = "";
        operationLengthCheck()
    }
}

function divide(){
    if (typeof numbers[numbers.length] != number) {
        current_entry = parseFloat(number_entered);
        if (!isNaN(current_entry)) {
            numbers.push(current_entry);
        }
        numbers.push("/");
        number_entered = "";
        operationLengthCheck()
    }
}

function operationLengthCheck() {
    numbers_entered = numbers.length;
    console.log("Length of numbers:");
    console.log(numbers_entered);
    if (numbers_entered % 3 == 0) {
        console.log("Performing operation on 2 numbers in numbers list")
        equals()
    }
}

function equals(){
    current_entry = parseFloat(number_entered);
    //console.log(current_entry);
    if (!isNaN(current_entry)) {
        numbers.push(current_entry);
    }
    console.log(...numbers);
    for (var i = 0; i < numbers.length; i++){
        //console.log(numbers[i]);
        //console.log(numbers[i+1];
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
    console.log(result);
    numbers.push(result);
}

function logNumber(){
    document.getElementById("number").innerHTML = number_entered;
}

function logResult(){
    //console.log(result);
    console.log(...numbers);
    document.getElementById("finalNumber").innerHTML = result;
    document.getElementById("number").innerHTML = result;
    
}