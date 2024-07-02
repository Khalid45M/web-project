function getPassword(length,includeLowerCase,includeUpperCase,includeSympols,includNumber){
    const lowerCase ="qwertyuioplkjhgfdsazxcvbnm"
    const upperCase ="QWERTYUIOPLKJHGFDSAZXCVBNM"
    const number ="0123456789"
    const symbols ="!@#$%^&*()_-"

    let allowCharcter = ""
    let passowrd = ""

    allowCharcter += includeLowerCase ? lowerCase : ""
    allowCharcter += includeUpperCase ? upperCase : ""
    allowCharcter += includeSympols ? symbols : ""
    allowCharcter += includNumber ? number : ""

    if(length < 8){
        console.log("length of password must be greater than or equale to 8")
    }else{
        if(allowCharcter.length > 0){
            for(let i=0;i < length;i++){
                let randamCharcter = Math.floor(Math.random() * allowCharcter.length)
                passowrd += allowCharcter[randamCharcter]
            }
        }else{
            console.log("You should select at least on case")
        }
    }
    
    return passowrd

}

const passwordLength = 12;
const isIncludeLower = true;
const isIncludeUpper = true;
const isIncludeSympols = true 
const isIncludeNumber = true
const passowrd = getPassword(passwordLength,isIncludeLower,isIncludeUpper,isIncludeSympols,isIncludeNumber)
console.log(passowrd)