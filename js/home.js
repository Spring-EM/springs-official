'use strict'

// pseudo code
//add data-target attribs to number counter elements
//set the values to the target numbers to scroll count into.
//give each data target a class of counter
//select counter container
//select all the elements with class counter
//set a variable speed to 200
//map through each array item of selected counter classes
//use item and index as parameters
//create an updatecounter function within callback
//select the data-target attribute value (dataset.target) and set to target number variable
//print taget to console.
//select the inner text in the counter element
//use the speed variable to calculate the increment per count
//write an if statement with a conditional that checks the initialnumber against the target number
//if the conditional returns true, update the inner text of the counter to the sum of the initial number and the increment per count
//add a setTimeOut with a duration of  40s and a callback of the updateCounter function
//use the math function to round up the new inner text
//add the addition operator to the start of the vlaues for the target number and the initial number


// gsap.registerPlugin(ScrollTrigger)


let counterContainer = document.getElementById("section-counter")

let counters = document.querySelectorAll(".counter-item .counter")

let speed = 50




//Counter Scroll Animation

let counterObserver = new IntersectionObserver((entries, observer) => {
    let  [entry] = entries
    if (entry.isIntersecting) {
        counters.forEach((counter, index) => {
          function updateCounter() {
            let targetNumber = +counter.dataset.target;
            let initialNumber = +counter.innerHTML;
            let incrPerCount = targetNumber / speed;
            if (initialNumber < targetNumber) {
              counter.innerHTML = Math.ceil(initialNumber + incrPerCount);
              setTimeout(updateCounter, 40);
            }
          }

          updateCounter();
        });
    }
 }, {
    root: null,
    threshold: 0.4
})

counterObserver.observe(counterContainer)


//page wide animations

gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
    duration: 1,
    delay: .7,
    ease: "power2.inOut",
    stagger: .1
})

tl.fromTo(".fade-in", {opacity: 0},{opacity: 1, duration: 1.})
  .from(".slide-in", {y: -500, delay: .3, duration: 1.5})
  .fromTo(".slide-in-on-scroll", {x: -1000}, {x: 0, duration: 2, scrollTrigger: {
    trigger: ".slide-in-on-scroll",
    start: "20px 80%" ,
    end: "bottom center",
    scrub: true,
    // toggleActions: "play pause resume reset"
    toggleActions: "restart pause reverse pause"
  }})
  .from(".fade-in-trigg", {opacity: 0, duration: 1.5, scrollTrigger: {
    trigger: ".fade-in-trigg",
    // markers: true,
    // start: "20px 80%" ,
    // end: "bottom center",
    scrub: true,
  }})
  .fromTo(".scale-on-scroll", {scale: 0}, {scale: 1, scrollTrigger: {
    trigger: ".scale-on-scroll",
    // markers: true,
    // start: "top center" ,
    // end: "bottom center",
    pin: "true",
    scrub: true,
  }})
  .fromTo(".card-flyin-one", {x: 350}, {x: 0, duration: 1.5, scrollTrigger: {
    trigger: ".card-flyin-one",
    scrub:true
  }})
//   .fromTo(".card-flyin-two", {x: -250}, {x: 0, duration: 1.5, scrollTrigger: {
//     trigger: ".card-flyin-two",
//     scrub:true
//   }})
  


