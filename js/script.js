'use scrict'

// nav content switcher

const contentNav = document.querySelectorAll(".card-one li")
const content = document.querySelectorAll(".card-two p")

const currentYear = document.getElementById("year")
//vars

let navItemOne = contentNav[0]
let navItemTwo = contentNav[1]
let navItemThree = contentNav[2]
let navItemFour = contentNav[3]
let navItemFive = contentNav[4]
let navItemSix = contentNav[5]

let contentOne = content[0]
let contentTwo = content[1]
let contentThree = content[2]
let contentFour = content[3]
let contentFive = content[4]
let contentSix = content[5]

navItemOne.addEventListener('click', function() {
    contentOne.classList.remove('hide')

    contentTwo.classList.add("hide");
    contentThree.classList.add("hide");
    contentFour.classList.add("hide");
    contentFive.classList.add("hide");
    contentSix.classList.add("hide");
})
navItemTwo.addEventListener('click', function() {
    contentTwo.classList.remove('hide')

    contentOne.classList.add("hide");
    contentThree.classList.add("hide");
    contentFour.classList.add("hide");
    contentFive.classList.add("hide");
    contentSix.classList.add("hide");
})
navItemThree.addEventListener('click', function() {
    contentThree.classList.remove('hide')

    contentTwo.classList.add("hide");
    contentOne.classList.add("hide");
    contentFour.classList.add("hide");
    contentFive.classList.add("hide");
    contentSix.classList.add("hide");
})
navItemFour.addEventListener('click', function() {
    contentFour.classList.remove('hide')

    contentTwo.classList.add("hide");
    contentThree.classList.add("hide");
    contentOne.classList.add("hide");
    contentFive.classList.add("hide");
    contentSix.classList.add("hide");
})
navItemFive.addEventListener('click', function() {
    contentFive.classList.remove('hide')

    contentTwo.classList.add("hide");
    contentThree.classList.add("hide");
    contentFour.classList.add("hide");
    contentOne.classList.add("hide");
    contentSix.classList.add("hide");
})
navItemSix.addEventListener('click', function() {
    contentSix.classList.remove('hide')

    contentTwo.classList.add("hide");
    contentThree.classList.add("hide");
    contentFour.classList.add("hide");
    contentFive.classList.add("hide");
    contentOne.classList.add("hide");
})

var getCurrentYear = new Date().getFullYear()
currentYear.innerHTML = getCurrentYear
