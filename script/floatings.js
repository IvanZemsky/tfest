document.addEventListener("DOMContentLoaded", () => {
   window.addEventListener("scroll", handleFloatingsPosition);
   window.addEventListener("resize", handleFloatingsPosition);
   handleFloatingsPosition();

   const upBtn = document.getElementById("floatings-up-btn");
   upBtn.addEventListener("click", handleUpBtnClick);
});

function handleFloatingsPosition() {
   const floatings = document.getElementById("floatings");
   const footer = document.querySelector(".footer");

   const isAddClass = isFooterVisible(footer);

   if (isAddClass) {
      floatings.style = `bottom: calc(${footer.offsetHeight}px + 15px`;
   } else {
      floatings.style = "";
   }
}

function isFooterVisible(footer) {
   const footerTop = footer.offsetTop;
   const windowHeight = window.innerHeight;
   const scrollY = window.scrollY || window.pageYOffset;

   return scrollY + windowHeight >= footerTop;
}

function handleUpBtnClick() {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
}
