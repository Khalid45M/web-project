let inputBox = document.getElementById("toDo");
let listTask = document.querySelector(".list-task");

function addTask() {
    if (inputBox.value !== " ") {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listTask.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listTask.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listTask.innerHTML)
}
function showData(){
    listTask.innerHTML = localStorage.getItem("data")
}
showData()