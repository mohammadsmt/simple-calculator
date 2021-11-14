"use strict"


let calBtn = document.querySelector("#Btn");

calBtn.addEventListener("click", function () {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);
    let select = document.querySelector("#oprator").value;
    let resultTitle = document.querySelector("#resultTitle");
    let result;

    if (select === '+') {
        result = num1 + num2;
        resultTitle.innerHTML = "Result : " + result;
    } else if (select === '-') {
        result = num1 - num2;
        resultTitle.innerHTML = "Result : " + result;
    } else if (select === '*') {
        result = num1 * num2;
        resultTitle.innerHTML = "Result : " + result;
    } else if (select === '/') {
        result = num1 / num2;
        resultTitle.innerHTML = "Result : " + result;
    } else {
        result = num1 % num2;
        resultTitle.innerHTML = "Result : " + result;
    }
    
});


