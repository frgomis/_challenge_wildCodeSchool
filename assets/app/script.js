console.log('bonjour');
const btnColor = document.querySelector('button.btn-validator');
const show = document.querySelector('.show');
const toHide = document.querySelector('.toHide');


btnColor.addEventListener('click', ()=>{
    btnColor.classList.toggle('active');
    show.classList.toggle('active');
    toHide.classList.toggle('active');
})