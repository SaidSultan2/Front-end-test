
const menuBtn = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
let menuOpen = false;

menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        setTimeout(() => {
            mobileMenu.classList.add('active-menu');
          }, 1000);
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen=false
    }
});

closeBtn.addEventListener('click', ()=> {
    mobileMenu.classList.remove('active-menu')
    menuBtn.classList.remove('open');
    menuOpen=false

})