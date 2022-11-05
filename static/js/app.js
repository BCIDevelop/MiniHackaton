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
    console.log('entro')
    e.preventDefault()
    Swal.fire({
        icon:'question',
        title:'Estas seguro de cerrar sesion',
        confirmButtonText:'Si, quiero',
        showCancelButton:true,
        denyButtonText:'No, seguir conectado'
    }).then((result)=>{
        if(result.isConfirmed===true){
            localStorage.clear()
            isLogedIn()
            Swal.fire({
                icon:'success',
                title: 'Listo!',
                text: 'Cerraste seccion satisfactoriamente',
                html: 'I will close in <b></b> milliseconds.',
                timer: 4000,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                      b.textContent = Math.floor(Swal.getTimerLeft()/1000)
                    }, 1000)
                  },
                willClose:()=>{
                    clearInterval(timerInterval)
                }  
            })
        }
    })
   
}   

isLogedIn()