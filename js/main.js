'use strict'

var hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", function() {
    var navBar = document.querySelector(".nav-items")
    navBar.classList.toggle("active")
    hamburger.classList.toggle("nav-clicked")
})
