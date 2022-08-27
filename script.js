window.onload = function(){
    let lines = document.querySelectorAll('.mm_line');
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else {
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
    document.querySelector(".active").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
    document.querySelector(".active2").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
    document.querySelector(".active3").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
    document.querySelector(".active4").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
    document.querySelector(".active5").addEventListener("click", function(){
        if(document.querySelector(".menus").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'none';
            for(let i in lines) {
                lines[i].classList.remove("activeX");
            }
        } else if(document.querySelector(".menuMobile").style.display == 'flex'){
            document.querySelector(".menus").style.display = 'flex';
            for(let i in lines) {
                lines[i].classList.add("activeX");
            }
        }
    });
};


/*--------------------------------------------------------------------------*/ 

let width = screen.width;
setInterval(mapSize, 1000);
let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;
let pointerNumber = document.querySelectorAll(".pointer");

document.querySelector('.slider').style.width = 
    `calc(100% * ${totalSlides})`;

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }
    pointerNumber.forEach((sliderSelection) => {sliderSelection.classList.remove("active")});
    pointerNumber[currentSlide].classList.add("active");
    updateMargin();
}
function go1() {
    currentSlide = 0;
    pointerNumber.forEach((sliderSelection) => {sliderSelection.classList.remove("active")});
    pointerNumber[0].classList.add("active");
    updateMargin();
}
function go2() {
    currentSlide = 1;
    pointerNumber.forEach((sliderSelection) => {sliderSelection.classList.remove("active")});
    pointerNumber[1].classList.add("active");
    updateMargin();
}
function go3() {
    currentSlide = 2;
    pointerNumber.forEach((sliderSelection) => {sliderSelection.classList.remove("active")});
    pointerNumber[2].classList.add("active");
    updateMargin();
}
function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider').style.marginLeft =
        `-${newMargin}px`;
}

setInterval(goNext, 3000);

function mapSize() {
    if (width > 800) {
        document.querySelector('.mapSize').style.width = "800px";
        document.querySelector('.mapSize').style.height = "600px";
    } else {
        document.querySelector('.mapSize').style.width = "400px";
        document.querySelector('.mapSize').style.height = "300px";
    }
}
