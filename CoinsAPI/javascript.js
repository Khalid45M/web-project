const mainField = document.getElementById("egpCurrency");
const outputField = document.getElementById("usaCurrency");
const icon = document.getElementById("reverse")
let timies = 0
let translateIcon = true

getData();

async function getData() {
    const response = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e77e48b7c6ef4cde9cecec03a4d41300");
    const data = await response.json();
    const EGP = Number(data.rates.EGP);

    icon.addEventListener("click", ()=>{
      timies++
      mainField.value = ""
      outputField.value = ""
      if(timies % 2 !== 0){
        translateIcon = false
        mainField.placeholder = "USA"
        outputField.placeholder = "EGP"
      }else{
        translateIcon = true
        mainField.placeholder = "EGP"
        outputField.placeholder = "USA"
      }
    })
    mainField.addEventListener("keyup", function() {
      getUSA(mainField.value, EGP);
    });


}
function getUSA(value, EGP) {
    outputField.value = translateIcon ? Math.floor((value / EGP) * 1000) /1000 :
       Math.floor((value * EGP) * 1000) /1000;
}





