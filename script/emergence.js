document.addEventListener("DOMContentLoaded", () => {
   const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation;
            observer.unobserve(entry.target);
         }
      });
   };
   const options = {
      threshold: 0.25,
   };

   const observer = new IntersectionObserver(observerCallback, options);

   const singleElements = [
      document.querySelector(".intro__title"),
   ];

   const multipleElements = [
      document.querySelectorAll(".intro__text"),
      document.querySelectorAll(".intro__btn"),
   ];

   singleElements.forEach((element) => observer.observe(element));

   multipleElements.forEach((elements) => {
      elements.forEach((element) => observer.observe(element));
   });
});
