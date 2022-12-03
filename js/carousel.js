console.clear();

// set count var to 0
// which will be the id of the current slide
let count = 0;
// set slides variable to array of nodes
// with the class client-list
const slides = document.querySelectorAll(".client-list");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

gsap.set(slides, { xPercent: -100 });
gsap.set(slides[0], { xPercent: 0 });

const slideIt = () => {
  gsap.to(slides[count], { xPercent: -100 });
  count = count < slides.length - 1 ? ++count : 0;
  gsap.fromTo(slides[count], { xPercent: 100 }, { xPercent: 0 });
  gsap.to({}, { duration: 2.5, onComplete: slideIt });
};

nextBtn.addEventListener("click", () => {
  gsap.to(slides[count], { xPercent: -100 });
  count = count > 0 ? --count : slides.length - 1;
  gsap.fromTo(slides[count], { xPercent: 100 }, { xPercent: 0 });
  gsap.killDelayedCallsTo(slideIt);
  // gsap.delayedCall(2, () => slideIt())
});

prevBtn.addEventListener("click", () => {
  gsap.to(slides[count], { xPercent: 100 });
  count = count < slides.length - 1 ? ++count : 0;
  gsap.fromTo(slides[count], { xPercent: -100 }, { xPercent: 0 });
  gsap.killDelayedCallsTo(slideIt);
  // gsap.delayedCall(2, () => slideIt())
});

// gsap.delayedCall(5, () => slideIt())
