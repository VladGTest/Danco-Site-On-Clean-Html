const hamburger = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.header__list');
const arrowDropDown = document.querySelector('.contact-us__form-reason > svg');
const reasonDropDown = document.querySelector('#contactReason');

hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if(headerMenu.classList.contains('active'))
        document.body.style.overflow = "hidden";
    else
        document.body.style.overflow = "auto";

});

reasonDropDown.addEventListener("click", ()=>{
    arrowDropDown.classList.toggle('active');
});
