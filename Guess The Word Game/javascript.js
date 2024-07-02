document.title = "Guess The Word"
// =============================================

const triesBox = document.querySelector(".tries")
const checkBtn = document.getElementById("check-btn")
const hints = document.getElementById("hints")
const categoryBox = document.getElementById("category")
const resultMessage = document.querySelector(".result")
const reloadBtn = document.querySelector(".new-game")

const choices = {
  "fruits": ["Apple", "Banana", "Orange", "Strawberry",
      "Mango", "Pineapple", "Watermelon",
       "Grapes", "Kiwi", "Pear"],

  "vegetables": ["Carrot", "Broccoli", "Tomato", "Spinach",
      "Cucumber", "Cauliflower", "Bell pepper", "Onion",
        "Potato", "Lettuce"],

  "programmingLanguages": ["JavaScript","Python","Java","C++","C#",
      "Ruby","Swift","Go","TypeScript","Rust","PHP",
        "Kotlin","MATLAB","R","Perl"]

}

const tries = 5;
let currentTry = 1;
let numOfHints = 2

// ==================================Random Word

let categories = Object.keys(choices);
let category = categories[Math.floor(Math.random() * categories.length)];
let categoryChoices = choices[category];
let word = categoryChoices[Math.floor(Math.random() * categoryChoices.length)].toLowerCase()
categoryBox.innerHTML = `Category: ${category}`

// =============================================

getWord()
function getWord(){
  for(let i=1; i <= tries;i++){
    let div = document.createElement("div")
    div.innerHTML = `Try-${i} :`
    div.classList.add(`try`)
    div.classList.add(`try-${i}`)
    // ===================================
    for(let e = 1; e <= word.length; e++){
      let input = document.createElement("input")
      input.type = "text"
      input.setAttribute("maxlength","1")
      input.id = `guess-${i}-letter-${e}`
      if( i !== 1) input.setAttribute("disabled","true")
      div.appendChild(input)
    }
    triesBox.appendChild(div)
  }
  // ===========================Handel Contoral in Game

  const inputs = document.querySelectorAll("input")
  inputs.forEach((i,index)=>{
    i.addEventListener("input",()=>{
      let nextInput = inputs[index +1].value === "" 
          ? inputs[index +1] : inputs[index +2]
      nextInput.focus()
    })
    i.addEventListener("keydown",(event)=>{
      if(event.code === "ArrowRight"){
        let nextInput = inputs[index +1]
        if(index < inputs.length) nextInput.focus()
      }
      if(event.code === "ArrowLeft"){
        let nextInput = inputs[index -1]
        if(index > 0)nextInput.focus()
      }
      if(event.code === "Backspace"){
        if(inputs[index].value === ""){
          if(index !== 0) inputs[index - 1].focus()
          inputs[index -1].value = ""
        }else{
          inputs[index].value = ""
        }
      }
    })
  })
  triesBox.children[0].children[0].focus()
}

// ===============================Check word Function

checkBtn.addEventListener("click",handleGuess)

function handleGuess(){
  let guessSuccess = true;
  for(let i = 1; i <= word.length; i++){
    let inputField = document.getElementById(`guess-${currentTry}-letter-${i}`)
    let letter = inputField.value.toLowerCase()
    let actualLetter = word[i - 1]
    // Game Logic

    if(letter === actualLetter){
      inputField.classList.add("right-place")
    }else if(word.includes(letter) && letter !== ""){
      inputField.classList.add("right-not-place")
      guessSuccess = false
    }else{
      inputField.classList.add("wronge")
      guessSuccess = false
    }
  }
    if(guessSuccess){
      resultMessage.innerHTML = `<p>You <span>Win</span>`
      checkBtn.remove()
      hints.remove()
      reloadBtn.style.display = "block"
    }else{
      if(currentTry === tries){
        resultMessage.innerHTML = 
          `<p>You <span>Lose</span> the right word is <span>${word}</span>`
          checkBtn.remove()
          hints.remove()
          reloadBtn.style.display = "block"
      }
      const previousInput = document.querySelectorAll(`.try-${currentTry} input`)
      previousInput.forEach(input => input.disabled = true)
      currentTry++
      const currentInput = document.querySelectorAll(`.try-${currentTry} input`)
      currentInput.forEach(input => input.disabled = false)
      if(currentTry < tries) currentInput[0].focus()
    }
}

// ====================================Hint Function

document.querySelector("#hints span").innerHTML = numOfHints
hints.addEventListener("click",getHint)


function getHint(){
  const enableInput = document.querySelectorAll("input:not([disabled])")
  const emptyEnableInput = Array.from(enableInput)
      .filter(input => input.value === "")
  //=================================
  if(emptyEnableInput.length > 0){
    if(numOfHints > 0){
    numOfHints--
    document.querySelector("#hints span").innerHTML = numOfHints
  }
  if(numOfHints <= 0){
    hints.disabled = true
    hints.style.cursor = "not-allowed"
  }
    let randomIndex = Math.floor(Math.random() * emptyEnableInput.length)
    let randomInput = emptyEnableInput[randomIndex]
    let indexRandomInput = Array.from(enableInput).indexOf(randomInput)
    randomInput.classList.add("letter-hint")
    randomInput.value = word[indexRandomInput]
  }
}

//=======================================New Game

reloadBtn.addEventListener("click", () => location.reload())
