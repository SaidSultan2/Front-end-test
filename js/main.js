
const menuBtn = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        setTimeout(() => {
            mobileMenu.classList.add('active-menu');
        }, 1000);
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false
    }
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active-menu')
    menuBtn.classList.remove('open');
    menuOpen = false

})


// Counter

let section = document.querySelector(".counter-container");
let stat = document.querySelectorAll(".stats .sta");
let start = false;

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!start) {
                stat.forEach(sta => startCount(sta));
            }
            start = true;
        }
    });
}, options);

observer.observe(section);

function startCount(el) {
    let max = el.dataset.max;
    let currentCount = 0;

    let count = setInterval(() => {
        el.textContent = ++currentCount;
        if (currentCount == max) {
            clearInterval(count);
        }
    }, 2000 / max);
}


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        },
        dotsContainer: '.custom-dots-container'
    }
});

var owl = $('.owl-carousel');
var dotContainer = $('.custom-dots-container');

owl.on('changed.owl.carousel', function(event) {
    var currentItem = event.item.index;
    dotContainer.find('div').removeClass('active');
    dotContainer.find('div').eq(currentItem).addClass('active');
});

dotContainer.on('click', 'div', function(e) {
    var index = $(this).index();
    owl.trigger('to.owl.carousel', [index, 300]);
});

$(document).ready(function() {
    owl.trigger('refresh.owl.carousel'); // Refresh the carousel
});
