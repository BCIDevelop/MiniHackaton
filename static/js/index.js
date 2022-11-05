const banner = document.querySelector("#banner");
const bembos = document.querySelector("#Hamburguesa");
bembos.onclick=function(){
    if( banner.getAttribute('Class')=='active'){
        banner.removeAttribute('class');
    }else{
        banner.setAttribute('class', 'active');
    }
}


window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 1000px)").matches) {
    //   console.log("Screen width is at least 500px")
        const imgs = document.querySelectorAll(".fondo img");
        imgs.forEach(element => {
            let src = element.getAttribute('filename-src');
            element.setAttribute('src', './images/mobile/'+src);
        });
    } else {
        const imgs = document.querySelectorAll(".fondo img");
        imgs.forEach(element => {
            let src = element.getAttribute('filename-src');
            element.setAttribute('src', './images/desktop/'+src);
        });
    }
  })