

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function calculatePercentage() {
    const currentValue = display.value;
    const result = (currentValue) / 100;
    display.value = result;
}


function calculateSquareRoot() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0) {
        const result = Math.sqrt(currentValue);
        display.value= result.toFixed(9);
    } else {
        display.value = "Error";
    }
}

function appendToDisplay(input) {
    if (input === 'x²') {
        // Calculate x² and append the result
        const currentValue = display.value;
        const squaredValue = Math.pow(currentValue, 2);
        display.value = squaredValue;
    } else {
        display.value += input;
    }
}