// text animation

let t = new Typed(".multitext", {
    strings: ["coder", "designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})


// hamburger menu

let hamburgericon = document.getElementById("hamburger");
let closebutton = document.getElementById("close");

hamburgericon.addEventListener("click", function(){
    document.querySelector("nav ul").classList.add("active")
})

closebutton.addEventListener("click", function(){
    document.querySelector("nav ul").classList.remove("active")
})


