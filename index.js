// hamburger menu

let hamburgericon = document.getElementById("hamburger");
let closebutton = document.getElementById("close");

hamburgericon.addEventListener("click", function () {
    document.querySelector("nav ul").classList.add("active")
})

closebutton.addEventListener("click", function () {
    document.querySelector("nav ul").classList.remove("active")
})


//contact form

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("clicked");
})

Email.send({
    SecureToken : "a2bdf8f4-1758-444a-bbf0-65c867a5f42a",
    To : 'jumayevalala98@gmail.com',
    From : "jumayevalala98@gmail.com",
    Subject : "testing email",
    Body : "meow"
}).then(
  message => alert(message)
);
