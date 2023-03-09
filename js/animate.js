gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".pill", {
  opacity: 0
}, {
  opacity: 1,
  duration: 1,
  delay: .5,
  scrollTrigger: {
    trigger: ".pill",
    scrub: true
  }
})