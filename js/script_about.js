const hamburger = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.header__list');
const teamItems = document.querySelectorAll('.team__item');
const teamItemsDescr = document.querySelectorAll('.team__item-descr');

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
        console.log(i);
    })
}

for(let i = 0; i < teamItems.length;i++){
    teamItems[i].addEventListener('mouseout',()=>{
        teamItemsDescr[i].classList.remove('active');
    })
}
