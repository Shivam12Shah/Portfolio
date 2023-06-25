
var hamburger = document.querySelector("#content h2");
var nav = document.querySelector("#nav-bar");
var flag = 0;
hamburger.addEventListener("click", function(){
    if(flag ===0){
        nav.style.top = 0;
       flag=1;
    }else{
        nav.style.top = "-100%";
       flag=0;
    }
})