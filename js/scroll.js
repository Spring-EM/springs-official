'use strict';


function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)

    els = Array.from(els)

    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('scrolled')

                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}

scrollTrigger('.scroll-counter', {
    rootMargin: '-200px'
})