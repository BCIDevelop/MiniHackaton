<h2> Hi, We are group 6! <iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></h2>

<p><em>FullStack Programmers at <a href="https://codigo.edu.pe/">CodiGO</a><img src="https://media.giphy.com/media/fYSnHlufseco8Fh93Z/giphy.gif" width="30">
</em></p>

###  A little more about me our codes funcionality  
 <h2> This is how we did it using JavaScript</h2>

###  Dark Mode main function  

```javascript
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
```
### Login session usig localStorage

```javascript
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


```
<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em><b>Great Team Work! </b> so if you want to say <b>hi, We'll be happy here about you!</b> :)</em>

---

⭐️ From Group 6 G-18