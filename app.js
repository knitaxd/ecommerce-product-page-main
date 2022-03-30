const nextArrow = document.getElementById('next__icon')


nextArrow.addEventListener('click', ()=>{
    document.querySelector('.first').style.transition = '1.5s'
    document.querySelector('.first').style.marginLeft = '-20%'
})