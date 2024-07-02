
let scrollContainer = document.querySelector(".galary")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

nextBtn.addEventListener("click", evt => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 600
})
backBtn.addEventListener("click", evt => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 600
})