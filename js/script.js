"use strict";

const imagesSrc = ["img/1.jpg", "img/2.jpg", "img/3.jpg","img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg"];
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const miniImages = document.querySelectorAll("#miniImages img");

let currentIndex = 0;

function changeMiniImages() {
    miniImages.forEach((elm) => {
        elm.classList.remove("active");
    })
    miniImages[currentIndex].classList.add("active");
}

function clickOnMiniImages(index) {
    currentIndex = index;
    main.src = imagesSrc[currentIndex];
    
    changeMiniImages();
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex >= imagesSrc.length) {
        currentIndex = 0;
    }
    main.src = imagesSrc[currentIndex];    
    changeMiniImages();
})

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = imagesSrc.length - 1;
    }
    main.src = imagesSrc[currentIndex];   
    changeMiniImages(); 
})

miniImages.forEach((e, index) => {
    e.addEventListener("click", clickOnMiniImages.bind(null, index));
})
