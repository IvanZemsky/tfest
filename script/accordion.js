document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll(".questions__item-header").forEach((element) => {
      element.addEventListener("click", () => {
         const content = element.nextElementSibling;
         if (content.style.maxHeight) {
            content.style.maxHeight = null;
            element.parentElement.classList.remove(
               "question--opened"
            );
         } else {
            content.style.maxHeight = content.scrollHeight + "px";
            element.parentElement.classList.add(
               "question--opened"
            );
         }
      });
   });
});
