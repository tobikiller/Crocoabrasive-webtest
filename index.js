const navLink = document.getElementById("nav-link")
const navBtn = document.getElementById("toggle-btn")
const btns = document.querySelectorAll(".btn")
const logo =  document.getElementById("croco-logo")



navBtn.addEventListener("click", function(){
   
    btns.forEach(function(btn){
        btn.classList.toggle("add-color")
    })



    if(navLink.classList.contains("show")){
        navLink.classList.remove("show")
        logo.classList.toggle("logo-top")
        gsap.to("#croco-logo", {
            duration: 1,
            opacity: 1,
            ease: "power1.out"
        
        })
    }else{
        navLink.classList.add("show")
        logo.classList.toggle("logo-top")
        gsap.from("#croco-logo", {
            duration: 1,
            opacity: 0,
            ease: "power1.out"
        
        })
    }
   


    
})


gsap.from(".logo", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power1.out"

})

gsap.from(".btn", {
    duration: 1,
    x: 10,
    opacity: 0,
    stagger:0.5,
    delay: 1,
    ease: "power3.out"

})
gsap.from(".bg-abrasive", {
    duration: 1,
    opacity: 0,
    y: -50,
    delay: 2,
    ease: "power2.out"

})

