
let display = document.getElementById("display")

let timer = null
let startTime = 0
let elapsedTime = 0
let isRuning = false

function start(){
    if(!isRuning){
        startTime = Date.now() - elapsedTime
        timer = setInterval(update, 10)
        isRuning = true
    }
}
function reset(){
    clearInterval(timer)
    startTime = 0
    elapsedTime = 0
    isRuning = false
    display.innerHTML = "00:00:00:00"
}
function stop(){
    if(isRuning){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime
        isRuning = false
    }
}
function update(){
    let currentTime = Date.now()

    elapsedTime = currentTime - startTime

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let secounds = Math.floor(elapsedTime / 1000 % 60)
    let milliseconds = Math.floor(elapsedTime % 1000 / 10)

    hours = hours.toString().padStart(2, 0)
    minutes = minutes.toString().padStart(2, 0)
    secounds = secounds.toString().padStart(2, 0)
    milliseconds = milliseconds.toString().padStart(2, 0)

    display.innerHTML = `${hours}:${minutes}:${secounds}:${milliseconds}`
}



