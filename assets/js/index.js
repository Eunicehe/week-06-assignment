const add_a = document.querySelector("#add-a");
const add_b = document.querySelector("#add-b");
const add_solve = document.querySelector("#add-solve");
const add_result = document.querySelector("#add-result");

const subtract_a = document.querySelector("#subtract-a");
const subtract_b = document.querySelector("#subtract-b");
const subtract_solve = document.querySelector("#subtract-solve");
const subtract_result = document.querySelector("#subtract-result");

const multiply_a = document.querySelector("#multiply-a");
const multiply_b = document.querySelector("#multiply-b");
const multiply_solve = document.querySelector("#multiply-solve");
const multiply_result = document.querySelector("#multiply-result");

const divide_a = document.querySelector("#divide-a");
const divide_b = document.querySelector("#divide-b");
const divide_solve = document.querySelector("#divide-solve");
const divide_result = document.querySelector("#divide-result");


// console.log(add_b.value)
let add_a_value = add_a.value;
let add_b_value = add_b.value;
// console.log(typeof add_b_value);
//string
let add_result_value = add_result.value;
// console.log(typeof add_result_value);
//string


function aPlusB() {
    // console.log(add_b_text)
    add_a_value = parseInt(add_a_value, 10);
    add_b_value = parseInt(add_b_value, 10);
    add_result_value = parseInt(add_result_value, 10);
    // console.log(add_a_value)
    //console.log(typeof add_b_value)
    //console.log(typeof add_result_value)
    //number
    add_result_value = add_a_value + add_b_value;
    add_result.value = add_result_value;
    //console.log(typeof add_result.value)
    //string
}

add_solve.addEventListener("click", aPlusB);



let subtract_a_value = subtract_a.value;
let subtract_b_value = subtract_b.value;
let subtract_result_value = subtract_result.value;


function aSubtractB() {

    subtract_a_value = parseInt(subtract_a_value, 10);
    subtract_b_value = parseInt(subtract_b_value, 10);
    subtract_result_value = parseInt(subtract_result_value, 10);

    subtract_result_value = subtract_a_value - subtract_b_value;
    subtract_result.value = subtract_result_value;

}

subtract_solve.addEventListener("click", aSubtractB);



let multiply_a_value = multiply_a.value;
let multiply_b_value = multiply_b.value;
let multiply_result_value = multiply_result.value;


function aMultiplyB() {

    multiply_a_value = parseInt(multiply_a_value, 10);
    multiply_b_value = parseInt(multiply_b_value, 10);
    multiply_result_value = parseInt(multiply_result_value, 10);

    multiply_result_value = multiply_a_value * multiply_b_value;
    multiply_result.value = multiply_result_value;

}

multiply_solve.addEventListener("click", aMultiplyB);



let divide_a_value = divide_a.value;
let divide_b_value = divide_b.value;
let divide_result_value = divide_result.value;


function adivideB() {

    divide_a_value = parseInt(divide_a_value, 10);
    divide_b_value = parseInt(divide_b_value, 10);
    divide_result_value = parseInt(divide_result_value, 10);

    divide_result_value = divide_a_value / divide_b_value;
    divide_result.value = divide_result_value;

}

divide_solve.addEventListener("click", adivideB);
