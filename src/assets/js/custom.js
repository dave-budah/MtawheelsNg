/*
* Hero slider js
* */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

// Hide topbar
function scrollUp() {
    const scrollUp = document.getElementById('topbar');
//    When the scroll is higher than 50 viewport, add the hide-topbar class to the topbar div.
    if(this.scrollY >= 50) scrollUp.classList.add('hide-topbar');
    else scrollUp.classList.remove('hide-topbar')
}
window.addEventListener('scroll', scrollUp)

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// form toggle
let  x = document.getElementById('company')
let  y = document.getElementById('individual')
let  z = document.getElementById('movingBtn')

function  individual() {
    x.style.left = '-600px';
    y.style.left = '0px';
    z.style.left = '110px';
}
function  company() {
    x.style.left = '0px';
    y.style.left = '-600px';
    z.style.left = '0px';
}
