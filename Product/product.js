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
       
    }else{
        navLink.classList.add("show")
  
    }
   


    
})