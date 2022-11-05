const circleContainer=document.querySelector('.circle-container')
const circle=document.querySelector('.circle')
const text=document.getElementById('text-light')
const figure=document.querySelector('.figure')
let mode=0
const buttonSubmit=document.getElementById('btn-submit')
const form=document.getElementById('form1')
const inputs= document.querySelectorAll('input')
const username=document.getElementById('text-success')
const article=document.getElementById('article')
const message=document.getElementById('message')
const logOut=document.getElementById('logOut')
const inputText=document.querySelector('.text')
const conteo =document.getElementById('conteo')
const conteoRegresivo =document.getElementById('conteo-regresivo')


circleContainer.onclick=function(){
    document.documentElement.classList.toggle('darkTheme')
    circle.classList.toggle('circle-dark')
    figure.classList.toggle('figure-black')
    if(mode===0){
        text.textContent='GRUPO 18 Sala 6'
        username.textContent=localStorage.getItem('email')
        message.textContent='Lograste entrar'
        inputText.classList.toggle('text-dark')
        mode=1
    }
    else {
        text.textContent='GRUPO 18 Sala 6'
        message.textContent='Iniciaste sesion correctamente'
        username.textContent=localStorage.getItem('email')
        inputText.classList.toggle('text-dark')
        mode=0
    }
}

buttonSubmit.onclick=function async(e){
     e.preventDefault()
     inputs.forEach((element)=>{
        localStorage.setItem(element.name,element.value)
     })
     if(mode===0) username.textContent=localStorage.getItem('email')
     else username.textContent='Grupo 18'
     form.style.display='none'
     article.style.display='flex'
     let contadorNumero=4
     setInterval(()=>{
        conteoRegresivo.innerHTML=contadorNumero
        contadorNumero--
     },1000)
     
      setTimeout(()=>{
       
        window.location.href = 'index.html';
     },5000)
       
       
}
logOut.onclick=function(){
    localStorage.clear()
    form.style.display='flex'
    article.style.display='none'

}
