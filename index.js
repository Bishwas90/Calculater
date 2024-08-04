document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");

    window.appendToDisplay = function(input) {
        // Prevent multiple dots or starting with a dot
        if (input === '.') {
            if (display.value === '' || display.value.slice(-1) === '.' || /[^0-9]$/.test(display.value.slice(-1))) {
                return;
            }
        }
        display.value += input;
    }

    window.clearDisplay = function() {
        display.value = "";
    }

    window.calculate = function() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
});
