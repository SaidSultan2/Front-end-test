
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


// Counter

let section = document.querySelector(".counter-container");
let stat = document.querySelectorAll(".stats .sta");
let start = false;

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop) {
        if (!start) {
            stat.forEach((sta) => startCount(sta));
        }
        start = true
    }
}

function startCount(el) {
    let max = el.dataset.max;

    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == max) {
            clearInterval(count);
        }
    },2000/stat)
}