const  quoteURL = "https://api.quotable.io/random"
const quoteBox = document.querySelector(".quote")
const authorBox = document.querySelector(".author")

async function getQuote(){
    const response = await fetch(quoteURL)
    const data = await response.json()
    const quote = data.content
    const author = data.author
    quoteBox.innerHTML = quote
    authorBox.innerHTML = author    
}
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteBox.innerHTML
    + "---by " + authorBox.innerHTML,
     "tweet window"," width=800, height=500")
}