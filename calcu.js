let input = '';
let result = document.getElementById('result');

function appendToInput(value) {       
    input += value;
    result.value = input;
}

function clearInput() {
    input = '';
    result.value = '';
}

function removeOneChar() {
    input = input.slice(0, -1);
    result.value = input;
}

function calculate() {
    try {
        input = eval(input);
        if (input === 2) {
            result.value = "i love you";
        } else {
            result.value = input;
        }
    } catch (error) {
        result.value = 'Error';
    }
}
