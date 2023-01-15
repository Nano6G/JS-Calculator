/*eslint-env es6*/

let number_entered = "";
let numbers = [];

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
        numbers.push(parseInt(number_entered));
        numbers.push("+");
        number_entered = "";
    }
}

function minus(){
    if (typeof numbers[numbers.length] != number) {
        numbers.push(parseInt(number_entered));
        numbers.push("-");
        number_entered = "";
    }
}

function multiply(){
    if (typeof numbers[numbers.length] != number) {
        numbers.push(parseInt(number_entered));
        numbers.push("x");
        number_entered = "";
    }
}

function divide(){
    if (typeof numbers[numbers.length] != number) {
        numbers.push(parseInt(number_entered));
        numbers.push("/");
        number_entered = "";
    }
}

function equals(){
    numbers.push(parseInt(number_entered));
    for (let x of numbers){
        console.log(x);
        if (x == "+") {
        }
        if (x == "-") {
        }
        if (x == "x") {
        }
        if (x == "/") {
        }
    }
    numbers = []
    logNumber();
}

function logNumber(){
    document.getElementById("number").innerHTML = number_entered;
}