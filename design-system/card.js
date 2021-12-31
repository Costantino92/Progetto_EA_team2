const battlefieldCard = document.querySelector('.battleFieldCard');

const battlefieldLogo= document.querySelector('.battleFieldLogo');
const gradientColor = document.querySelector('.gradientColor');

function animCard(){
    
    battlefieldLogo.style.transform = 'translateY(-60px)';
    battlefieldLogo.style.transition = 'all 300ms ease-out;';
    gradientColor.style.display='flex';
    gradientColor.style.color='white';
}

function disAnimCard(){
    
    battlefieldLogo.style.transform = 'translateY(0)';
    battlefieldLogo.style.transition = 'all 300ms ease-out;';
    gradientColor.style.display='none';
}


battlefieldCard.addEventListener('mouseover',animCard);
battlefieldCard.addEventListener('mouseout',disAnimCard);