/* NAV BAR */

let btnHamburgerMenu = document.querySelector('.hamburger-menu-btn')
let menuList = document.querySelector('.menu-list')
let closeBtn = document.querySelector('.close-button')
let mailIcon = document.querySelector('.mail-icon')

btnHamburgerMenu.addEventListener("click", () => {
    menuList.classList.add('active')
    btnHamburgerMenu.style.display = "none"
    mailIcon.style.display = "none"
})

closeBtn.addEventListener("click", () => {
    menuList.classList.remove('active')
    btnHamburgerMenu.style.display = "block"
    mailIcon.style.display = "block"
})

/* FLIP PROJECT CARDS */

let btnRead = document.querySelectorAll('.btn')
let btnBack = document.querySelectorAll('.btn-back')
let cardProjects = document.querySelectorAll('.card-project');

cardProjects.forEach((card, index) => {
    const btn = btnRead[index] 
    const backBtn = btnBack[index]
    if(btn) { 
    btn.addEventListener("click", () => {
        card.classList.add("flipped")
        
    })
    };
    if(backBtn) {
        backBtn.addEventListener("click", () => {
            card.classList.remove("flipped")
        })
    }
});

/* CARD DESCRIPTION */

let cardDescription = document.querySelectorAll('.card-description');

cardDescription.forEach((card, index) => {
    const btn = btnRead[index] 
    const backBtn = btnBack[index]
    if(btn) { 
    btn.addEventListener("click", () => {
        card.classList.add("flipped")
        
    })
    };
    if(backBtn) {
        backBtn.addEventListener("click", () => {
            card.classList.remove("flipped")
        })
    }
});

/* COUNTER OF PROJECTS */

let counter = document.querySelector('.count')
let num = 0

let count = setInterval(() => {
    if(num < 10) {
        num++
        counter.textContent = num
    } else {
        clearInterval(count)
    }
},200)
console.log(count)



/* Writing text */

const textAboutMe = document.querySelector("#typing-text");  
const text = textAboutMe.getAttribute("data-text");  
textAboutMe.innerHTML = "";  

let indexText = 0;

function writer() {
    if (indexText < text.length) {  
        textAboutMe.innerHTML += text.charAt(indexText);  
        indexText++;  
        setTimeout(writer, 50);
    }
}

window.onload = writer;

