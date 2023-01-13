/*eslint-env es6*/

let number_entered = "";

function addNumber(number) {
    number_entered += number.toString();
    const name = document.getElementById("test")
    name.style.color = "red";
    console.log(number_entered);
}

function clear_number() {
    number_entered = "";
    console.log(number_entered);
}

function remove() {
    if (number_entered.length > 0) {
        number_entered = number_entered.substring(0, number_entered.length-1);
    }
    console.log(number_entered);
}

function add(){
    
}

function minus(){
    
}

function multiply(){
    
}

function divide(){
    
}