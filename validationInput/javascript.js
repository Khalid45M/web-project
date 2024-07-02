let nameError = document.getElementById("nameError")
let phoneError = document.getElementById("phoneError")
let emailError = document.getElementById("emailError")
let submitError = document.getElementById("submitError")

function validateName(){
    let nameInput = document.getElementById("userName").value
    if(nameInput.length == 0){
        nameError.innerHTML = 'Name is require'
        return false 
    }
    if(!nameInput.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = "Write Full Name"
        return false
    }
        nameError.innerHTML = '<i class="fa-solid fa-badge-check" style = "color:seagreen"></i>'
        return true

}   

function validatePhone(){
    let phoneInput = document.getElementById("number").value
    if(phoneInput.length == 0){
        phoneError.innerHTML = "Phone number is require"
        return false
    }
    if(phoneInput.length != 11){
        phoneError.innerHTML = "Phone number must be 11 digits"
        return false
    }
    if(!phoneInput.match(/^[0-9]{11}$/)){
        console.log("hello world")
        phoneError.innerHTML = "Only digits"
        return false
    }
    phoneError.innerHTML = '<i class="fa-solid fa-badge-check" style = "color:seagreen"></i>'
    return true
}

function validateEmail(){
    let EmailInput = document.getElementById("email").value

    if(EmailInput.length == 0){
        emailError.innerHTML = "Email is required"
        return false
    }
    if(!EmailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = "Email is wronge"
        return false
    }
    emailError.innerHTML = '<i class="fa-solid fa-badge-check" style = "color:seagreen"></i>'
    return true
}

function validation(){
   if(!validateName() || !validatePhone() || !validateEmail()){
    submitError.innerHTML = "Complite Your Information"
    setTimeout(() => {
        submitError.innerHTML = ""
    }, 3000);
    return false
   } 
   return true
}