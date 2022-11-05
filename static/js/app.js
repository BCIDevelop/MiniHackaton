const logIn= document.querySelector('.logIn')
const logOut= document.querySelector('.logOut')
function isLogedIn(){
    if(localStorage.getItem('email')){
        logIn.style.display='none'
        logOut.style.display='inline-block'
    } else {
        logIn.style.display='inline-block'
        logOut.style.display='none'
    }
}   
logOut.onclick=(e)=>{
    e.preventDefault()
    localStorage.clear()
    isLogedIn()
}

isLogedIn()