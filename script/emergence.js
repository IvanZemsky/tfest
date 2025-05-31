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
      document.querySelector(".intro__text"),
      document.querySelector(".intro__btn"),

      document.querySelector(".about__card-text"),
      document.querySelector(".about__card-line"),
   ];

   console.log(singleElements);

   const multipleElements = [
      document.querySelectorAll(".title"),
      document.querySelectorAll(".desc")
   ];

   singleElements.forEach((element) => observer.observe(element));

   multipleElements.forEach((elements) => {
      elements.forEach((element) => observer.observe(element));
   });
});
