let navContainer = document.getElementById('nav-container');
let sideBar = document.getElementById('side-bar');
const menuBtn = document.getElementById('menu');
const CloseMenuBtn = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');
const submit = document.getElementById('mc-embedded-subscribe');
const signUp = document.getElementById('mc_embed_shell');

submit.addEventListener('click', () => {
    setTimeout(function() {
    },4000);
})

window.addEventListener('scroll', () =>{
    if(document.documentElement.scrollTop > 10){
        navContainer.classList.add("background")
    } else{
        navContainer.classList.remove("background")

    }
})

menuBtn.addEventListener('click', () => {
    sideBar.classList.add('active')
})

CloseMenuBtn.addEventListener('click', () => {
    sideBar.classList.remove('active')
})



