let boxs = document.getElementById("boxs")
let successMsg = "Success Proccess"
let errorMsg = "Error, Fex it Pleace"
let invalidMsg = "Invalid value"

function showBox(msg){
    let div = document.createElement("div")
    div.classList.add("box")
    div.innerHTML= msg
    if(msg.includes("Success")){
        div.classList.add("success")
    }
    else if(msg.includes("Error")){
        div.classList.add("error")
    }
    else if(msg.includes("Invalid")){
        div.classList.add("invalid")
    }
    let span = document.createElement("span")
    boxs.appendChild(div).appendChild(span)

    setTimeout(() => {
        div.remove()
    }, 6000);
}