/*eslint-env es6*/

let number_entered = "";
let numbers = [];

function addNumber(number) {
    number_entered += number.toString();
    const name = document.getElementById("test")
    name.style.color = "red";
    //console.log(number_entered);
}

function clear_number() {
    number_entered = "";
}

function remove() {
    if (number_entered.length > 0) {
        number_entered = number_entered.substring(0, number_entered.length-1);
    }
    else if (typeof numbers[numbers.length] != number) {
        numbers.pop();
    }
    console.log(number_entered);
}

function decimal(){
    number_entered += ".";
    console.log(number_entered);
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
            console.log("Adding...")
        }
    }
    number = []
}