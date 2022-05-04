const navLink = document.getElementById("nav-link")
const navBtn = document.getElementById("toggle-btn")
const btns = document.querySelectorAll(".btn")

navBtn.addEventListener("click", function(){
    navLink.classList.toggle("show")
    btns.forEach(function(btn){
        btn.classList.toggle("add-color")
    })
})


gsap.from(".logo", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power1.out"

})