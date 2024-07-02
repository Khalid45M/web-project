let images = document.querySelectorAll(".slides img")
let slideIndex = 0
let intervalId = null

document.addEventListener("DOMContentLoaded", setImage)
function setImage(){
    images[slideIndex].classList.add("display")
    intervalId = setInterval(nextSlide, 5000)
}

function showSlide(index){
    if(index >= images.length){
        slideIndex = 0
    }else if(index < 0){
        slideIndex= images.length - 1
    }
    images.forEach( slide =>{
        slide.classList.remove("display")
    })
    images[slideIndex].classList.add("display")
}

function nextSlide(){
    slideIndex ++
    showSlide(slideIndex)
    
}
function prevSlide(){
    slideIndex --
    showSlide(slideIndex)
    clearInterval(intervalId)
}

let icon = document.querySelector("#btnMood")
let iconImage = document.querySelector("#btnMood img")

icon.onclick = function(){
    document.body.classList.toggle("dark-mood")
    if(document.body.classList.contains("dark-mood")){
        iconImage.src = "/icon/sun.png"
    }else{
        iconImage.src = "/icon/moon.png"
    }
}