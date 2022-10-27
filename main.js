let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navibar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// Hide Menu And Search box on scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// acive class

$(document).on('click', 'ul li' , function(){
    $(this).addClass('active').siblings().removeClass('active')
})

// Header

let header = document.querySelector('header')

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})

// FAQS

$(document).ready(function(){
    $('.ques').click(function () {
$(this).children('.gap').children('.fa').toggleClass('fa-plus fa-minus')
$(this).next('.ans').slideToggle(500);
})
})
