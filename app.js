const nextArrow = document.getElementById('next__icon')
const touchSlide = document.querySelector('.main__slide--box')


// arrow functions
let indexValue = 1
showImg(indexValue)

function sideSlide(e){
    showImg(indexValue +=e)
}

function showImg(e){
    const img = document.querySelectorAll('.product__img')
    if(e > img.length) {
        indexValue = 1
    } else if(e < 1){
        indexValue = img.length
    }

    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';
    }

    img[indexValue - 1].style.display = 'block';
}

// nav functions
document.querySelector(".nav__background").addEventListener('click', ()=>{
    closeNav()
})

let openNav = () => {
    document.getElementById("nav__deploy").style.width = "67%"
    document.querySelector(".nav__background").style.width = "33%"
 }
let closeNav = () => {
    document.getElementById("nav__deploy").style.width = "0"
    document.querySelector(".nav__background").style.width = "0"
}

