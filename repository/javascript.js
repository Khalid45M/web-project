
const inputSearch = document.getElementById("userName")
const searchBtn = document.querySelector(".searchBtn")
const resultArea = document.querySelector(".result")

//========================================


searchBtn.addEventListener("click",getRepos)

async function getRepos(){
    resultArea.innerHTML = ""
    if(inputSearch.value === ""){
        let p = document.createElement("p")
        p.innerHTML = `Pleace Enter A github username`
        resultArea.appendChild(p)
    }else{
        let userName = inputSearch.value
        let response =  await fetch(`https://api.github.com/users/${userName}/repos`)
        console.log(response)
        let data = await response.json()
                data.forEach(repo => {
                    let p = document.createElement("p")
                    p.innerHTML = repo.name
                    let a = document.createElement("a")
                    a.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`
                    a.href = repo.html_url
                    a.target = "_blank"
                    resultArea.appendChild(p).appendChild(a)
                });
        
    }
}