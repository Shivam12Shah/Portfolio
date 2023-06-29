
var hamburger = document.querySelector("#content h2");
var nav = document.querySelector("#nav-bar");
var h2 = document.querySelector("#content h2")
var flag = 0;
var main = document.querySelector("#main")
var mouse = document.querySelector("#cursor")
var title = document.querySelector("#intro h3")



hamburger.addEventListener("click", function(){
    if(flag ===0){
        nav.style.top = 0;
       flag=1;
       h2.innerHTML = ``
    }else{
        nav.style.top = "-100%";
       flag=0;
    }
})


main.addEventListener("mousemove", function(dts){

    mouse.style.left = `${dts.x}px`;
    mouse.style.top = `${dts.y}px`;
})

title.addEventListener("mouseenter", function(){
    mouse.style.scale = 10;
    mouse.style.mixBlendMode= "color";

})
title.addEventListener("mouseleave", function(){
    mouse.style.scale = 1;
    mouse.style.mixBlendMode= "normal";

})