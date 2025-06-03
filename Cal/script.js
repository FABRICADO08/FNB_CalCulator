function digitBtnPressed(digit) {
    const inputBox = document.getElementById("inputBox");
    if (inputBox.value === "0") {
        inputBox.value = digit;
    } else {
        inputBox.value += digit;
    }
}

function operatorBtnPressed(operator) {
    const inputBox = document.getElementById("inputBox");
    inputBox.value += " " + operator + " ";
}

function equalBtnPressed() {
    const inputBox = document.getElementById("inputBox");
    const expression = inputBox.value.replace(/x/g, "*");
    try {
        inputBox.value = eval(expression);
    } catch (error) {
        inputBox.value = "Error";
    }
}
function decimalBtnPressed() {
    const inputBox = document.getElementById("inputBox");
    if (!inputBox.value.includes(".")) {
        inputBox.value += ".";
    }
}
function percentageBtnPressed() {
    const inputBox = document.getElementById("inputBox");
    inputBox.value = parseFloat(inputBox.value) / 100;
}

function clearInput() {
    const inputBox = document.getElementById("inputBox");
    inputBox.value = "0";
}

function clearEntry() {
    const inputBox = document.getElementById("inputBox");
    inputBox.value = inputBox.value.slice(0, -1);
}
