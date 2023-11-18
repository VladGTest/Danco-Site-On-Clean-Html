const projectsFront = document.querySelectorAll('.projects__item-front');
const projectsBack = document.querySelectorAll('.projects__item-back');
const projectsItem = document.querySelectorAll('.projects__item');

for(let i = 0; i < projectsItem.length;i++){
    projectsItem[i].addEventListener('mouseover', () => {
        projectsFront[i].classList.add('active');
        projectsBack[i].classList.add('active');
    });
}


for(let i = 0; i < projectsItem.length;i++){
    projectsItem[i].addEventListener('mouseout', () => {
        projectsFront[i].classList.remove('active');
        projectsBack[i].classList.remove('active');
    });
}