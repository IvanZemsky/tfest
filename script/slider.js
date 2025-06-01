const images = [
   "assets/img/gratitude/1.jpg",
   "assets/img/gratitude/2.jpg",
   "assets/img/gratitude/3.jpg",
   "assets/img/gratitude/4.jpg",
   "assets/img/gratitude/5.jpg",
   "assets/img/gratitude/6.jpg",
   "assets/img/gratitude/7.jpg",
   "assets/img/gratitude/8.jpg",
   "assets/img/gratitude/9.jpg",
];

let activeImg = 0;
const sliderLine = document.querySelector(".slider-line");
const widthOffset = document.querySelector(".slider").clientWidth;

sliderLine.style.width = 3 * widthOffset + "px";
sliderLine.style.transform = "translateX(-" + widthOffset + "px)";

let flat = true;

const initSlider = () => {
   const sliderImgWrap = document.createElement("div");
   sliderImgWrap.classList.add("slider-img-wrap");
   const img = document.createElement("img");

   img.src = images[activeImg];
   img.classList.add("active-img");

   sliderImgWrap.append(img);
   sliderLine.append(sliderImgWrap);

   nextImageGenerate();
   prevImageGenerate();
};

const nextImageGenerate = () => {
   let nextImage = activeImg + 1;

   if (nextImage >= images.length) {
      nextImage = 0;
   }
   const sliderImgWrap = document.createElement("div");
   sliderImgWrap.classList.add("slider-img-wrap");
   const img = document.createElement("img");

   img.src = images[nextImage];
   sliderImgWrap.append(img);
   sliderLine.append(sliderImgWrap);
};

const prevImageGenerate = () => {
   let prevImage = activeImg - 1;
   if (prevImage < 0) {
      prevImage = images.length - 1;
   }
   const sliderImgWrap = document.createElement("div");
   sliderImgWrap.classList.add("slider-img-wrap");
   const img = document.createElement("img");

   img.src = images[prevImage];
   sliderImgWrap.prepend(img);
   sliderLine.prepend(sliderImgWrap);
};

const nextSlide = () => {
   activeImg++;
   if (activeImg >= images.length) {
      activeImg = 0;
   }
   document.querySelector(".slider-img-wrap").remove();
   nextImageGenerate();
};

const prevSlide = () => {
   activeImg--;
   if (activeImg < 0) {
      activeImg = images.length - 1;
   }
   document.querySelector(".slider-img-wrap:last-child").remove();
   prevImageGenerate();
};

initSlider();

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
