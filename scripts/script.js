let burger=document.querySelector(".burger");
let links=document.querySelector(".links");
burger.addEventListener("click",()=>{
    links.classList.toggle("active");
})
// window.addEventListener("scroll",()=>{
//     document.querySelector(".main").style.background="red";
// })