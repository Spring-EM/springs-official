'use strict'

var hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", function() {
    var navBar = document.querySelector(".nav-items")
    navBar.classList.toggle("active")
    hamburger.classList.toggle("nav-clicked")
})

var btnCta = document.querySelector("#cta")
btnCta.addEventListener("click", function() {
    location.href("services.html`")
})

// const scrollOffset = 100

// //target all js scrolled elements
// const scrollElements = document.querySelectorAll(".js-scroll");

// scrollElements.forEach((el) => {
//     el.style.opacity = 0
//   })

// const elementInView = (el, percentageScroll = 100) => {
//     const elementTop = el.getBoundingClientRect().top;
//     return (
//         elementTop <=  ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
//     );
// };
// const elementInView = (el, dividend = 1) => {
//     const elementTop = el.getBoundingClientRect().top;
//     return (
//         elementTop <=  ((window.innerHeight || document.documentElement.clientHeight) / dividend)
//     );
// };

// const elementOutOfView = (el) => {
//     const elementTop = el.getBoundingClientRect().top;
//     return (
//         elementTop <=  ((window.innerHeight || document.documentElement.clientHeight) / dividend)
//     );
// }

// const displayScrollElement = (element) => {
//     element.classList.add("scrolled");
//   };

//   const hideScrollElement = (element) => {
//     element.classList.remove("scrolled");
//   };

//   const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//       if (elementInView(el, scrollOffset)) {
//         displayScrollElement(el);
//       } else{
//         hideScrollElement(el);
//       }
//     })
//   }

//   window.addEventListener('scroll', () => {
//     handleScrollAnimation();
//   })


