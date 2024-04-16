const display = document.getElementById("display");


function clearDisplay() {
    display.value = "";
}


function deleteLast() {
    display.value = display.value.slice(0, -1);
}





function equals() {
    try {
        const result = eval(display.value);
        if (!isFinite(result)) {
            throw new Error("Invalid expression");
        }
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

