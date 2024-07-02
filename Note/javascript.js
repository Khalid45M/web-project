let noteContainer = document.querySelector(".note-container")
let btn = document.querySelector("#addNote")



function show(){
  noteContainer.innerHTML = localStorage.getItem("notes")
}
show()
function save(){
  localStorage.setItem("notes", noteContainer.innerHTML)
}

btn.addEventListener("click",()=>{
  let p = document.createElement("p")
  p.classList.add("note")
  p.setAttribute("contenteditable","true")
  let image = document.createElement("img") 
  image.src = "images/delete.png"
  image.setAttribute("onclick","deleteNote()")
  noteContainer.appendChild(p).appendChild(image)
})

noteContainer.addEventListener("click", (e) =>{
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove()
    save()
  }else if(e.target.tagName === "P"){
    let notes = document.querySelectorAll(".note")
    notes.forEach( note =>{
      note.onkeyup = function(){
        save()
      }
    })
  }
})

