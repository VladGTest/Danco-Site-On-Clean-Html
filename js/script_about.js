const hamburger = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.header__list');
const teamItems = document.querySelectorAll('.team__item');
let teamItemsDescr = document.querySelectorAll('.team__item-descr');
const teamItemsDescrInfo = document.querySelectorAll('.team__item-descr-descr');


hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if(headerMenu.classList.contains('active'))
        document.body.style.overflow = "hidden";
    else
        document.body.style.overflow = "auto";

});

for(let i = 0; i < teamItems.length;i++){
    teamItems[i].addEventListener('mouseover',()=>{
        teamItemsDescr[i].classList.add('active');
        teamItemsDescrInfo[i].classList.add('active');
    })
}

for(let i = 0; i < teamItems.length;i++){
    teamItems[i].addEventListener('mouseout',()=>{
        teamItemsDescr[i].classList.remove('active');
        teamItemsDescrInfo[i].classList.remove('active');
    })
}
