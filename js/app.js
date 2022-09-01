const links = document.querySelector('.navbar__links');
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

hamburger.addEventListener('click', function(){
    links.classList.toggle('active');
    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
    bar3.classList.toggle('active');
})