let imageBox = document.querySelector(".image")
let  qrImage = document.getElementById("qrImage")
let url = document.getElementById("url")
let IconHidden = document.getElementById("hidden")

function getURL(){
  if(url.value.length !== 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
         + url.value
    imageBox.style.display = "block"
  }else{

    url.classList.add("error")

    setTimeout( () => {
      url.classList.remove("error")
    },1000)

  }
}

IconHidden.addEventListener("click", ()=>{
  imageBox.style.display = "none"
})