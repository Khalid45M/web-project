let display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}
function calculate() {
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = "ERROR"
    }
}

function deletFromDisplay() {
  let inputValue = display.value;
  let newValue = inputValue.slice(0, -1);
  display.value = newValue;
}

function clearDisplay() {
  display.value = ""
}
