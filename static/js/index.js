const banner = document.querySelector("#banner");
const bembos = document.querySelector("#Hamburguesa");
bembos.onclick=function(){
    if( banner.getAttribute('Class')=='active'){
        banner.removeAttribute('class');
    }else{
        banner.setAttribute('class', 'active');
    }
}
