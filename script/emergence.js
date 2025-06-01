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

   const elements = [
      document.querySelector(".intro__text"),
      document.querySelector(".intro__btn"),

      document.querySelector(".about__card-text"),
      document.querySelector(".about__card-line"),

      document.querySelector(".about__img-card"),
      document.querySelector(".about__img-card-desc"),
      document.querySelector(".about__quote-card"),
      document.querySelector(".about__quote-text"),
      document.querySelector(".about__quote-author"),

      ...document.querySelectorAll(".team__card"),

      ...document.querySelectorAll(".portfolio__card"),

      ...document.querySelectorAll(".advantages__card"),
      ...document.querySelectorAll(".advantages__card-icon "),

      ...document.querySelectorAll(".title"),
      ...document.querySelectorAll(".desc"),

      ...document.querySelectorAll(".questions__item"),

      ...document.querySelectorAll(".schedule__card"),
   ];

   elements.forEach((element) => observer.observe(element));
});
