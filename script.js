let mobileMenu = document.querySelector(".header_nav")
let burger = document.querySelector(".fa-bars")
let Xmark = document.querySelector(".fa-xmark")

burger.addEventListener("click",()=>{
    mobileMenu.classList.add("active_menu")
    burger.style.display = "none"
    Xmark.style.display = "block"

})
Xmark.addEventListener("click",()=>{
    mobileMenu.classList.remove("active_menu")
    burger.style.display = "block"
    Xmark.style.display = "none"
})