document.addEventListener("DOMContentLoaded", () => {
   const cardContainer = document.querySelector(".schedule__items-container");
   const hiddenCards = document.querySelector(".schedule__items--hidden");
   const showMoreButton = document.getElementById("show-more-schedule-button");

   let isExpanded = false;
   let initialHeight;

   function getInitialHeight() {
      cardContainer.style.overflow = "visible";
      hiddenCards.style.display = "none";

      const height = cardContainer.scrollHeight;

      cardContainer.style.overflow = "hidden";
      return height;
   }

   showMoreButton.addEventListener("click", () => {
      if (!isExpanded) {
         hiddenCards.style.display = "grid";
         cardContainer.style.overflow = "visible";
         const fullHeight = cardContainer.scrollHeight;
         cardContainer.style.overflow = "hidden";
         cardContainer.style.height = fullHeight + "px";
         showMoreButton.textContent = "Скрыть";
         isExpanded = true;
      } else {
         cardContainer.style.height = initialHeight + "px";
         setTimeout(() => {
            hiddenCards.style.display = "none";
         }, 500);
         showMoreButton.textContent = "Показать еще";
         isExpanded = false;
      }
   });

   initialHeight = getInitialHeight();
   cardContainer.style.height = initialHeight + "px";
});
