document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll(".questions__item-header").forEach((element) => {
      element.addEventListener("click", () => {
         const content = element.nextElementSibling;
         if (content.style.maxHeight) {
            content.style.maxHeight = null;
            element.parentElement.parentElement.classList.remove(
               "questions--opened"
            );
         } else {
            content.style.maxHeight = content.scrollHeight + "px";
            element.parentElement.parentElement.classList.add(
               "questions--opened"
            );
         }
      });
   });
});
