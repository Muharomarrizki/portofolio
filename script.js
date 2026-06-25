
// =====================
// AOS
// =====================

AOS.init({
    duration:1000,
    once:true
});



// =====================
// TYPING EFFECT
// =====================

new Typed("#typing",{

    strings:[
        "Full Stack Developer",
        "Laravel Developer",
        "AI Enthusiast",
        "Machine Learning Explorer"
    ],

    typeSpeed:80,
    backSpeed:50,
    backDelay:1500,
    loop:true

});



// =====================
// GSAP HERO
// =====================

gsap.from(".badge",{

    y:-50,
    opacity:0,
    duration:1

});


gsap.from(".hero h1",{

    y:80,
    opacity:0,
    duration:1.2,
    delay:.3

});


gsap.from(".hero h2",{

    y:50,
    opacity:0,
    duration:1,
    delay:.6

});


gsap.from(".hero p",{

    y:50,
    opacity:0,
    duration:1,
    delay:.8

});


gsap.from(".hero-buttons",{

    y:50,
    opacity:0,
    duration:1,
    delay:1

});


gsap.from(".hero-image",{

    x:100,
    opacity:0,
    duration:1.5

});




// =====================
// SCROLL REVEAL
// =====================

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{

        opacity:0,

        y:100,

        duration:1,

        scrollTrigger:{

            trigger:section,

            start:"top 80%"

        }

    });

});




// =====================
// NAVBAR EFFECT
// =====================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.background="rgba(5,8,22,.8)";
        nav.style.backdropFilter="blur(25px)";

    }

    else{

        nav.style.background="rgba(255,255,255,.03)";

    }

});




// =====================
// FLOATING PROJECT CARD
// =====================

gsap.to(".project-card",{

    y:-15,

    repeat:-1,

    yoyo:true,

    duration:2,

    stagger:.3,

    ease:"power1.inOut"

});




// =====================
// AVATAR GLOW
// =====================

gsap.to(".avatar-ring",{

    boxShadow:"0 0 120px #00f5ff",

    repeat:-1,

    yoyo:true,

    duration:2

});




// =====================
// VANILLA TILT
// =====================

VanillaTilt.init(

document.querySelectorAll(

".skill-card,.timeline-card,.project-card,.contact-card,.certificate-card"

),

{

max:15,

speed:400,

glare:true,

"max-glare":0.3

}

);




// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll(

'a[href^="#"]'

).forEach(anchor=>{

anchor.addEventListener(

"click",

function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

}

);

});




// =====================
// CURSOR GLOW
// =====================

document.addEventListener(

"mousemove",

e=>{

document.body.style.setProperty(

"--mouse-x",

e.clientX+"px"

);

document.body.style.setProperty(

"--mouse-y",

e.clientY+"px"

);

}

);




// =====================
// RANDOM FLOAT
// =====================

gsap.to(".skill-card",{

y:-8,

duration:2,

repeat:-1,

yoyo:true,

stagger:.1

});



console.log(

"%cPortfolio Loaded 🚀",

"color:#00f5ff;font-size:20px;font-weight:bold"

);


// =====================
// IMAGE MODAL & SLIDER
// =====================

let currentImageIndex = 0;
let currentImages = [];

function openModal(element) {
    const modal = document.getElementById("imageModal");
    const imagesAttr = element.getAttribute('data-images');
    
    if (imagesAttr) {
        currentImages = imagesAttr.split(',');
        currentImageIndex = 0;
        updateModalContent();
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

function changeSlide(direction) {
    currentImageIndex += direction;
    
    // Loop back to start/end
    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }
    
    updateModalContent();
}

function updateModalContent() {
    const modalImage = document.getElementById("modalImage");
    const slideCounter = document.getElementById("slideCounter");
    
    modalImage.src = currentImages[currentImageIndex];
    slideCounter.innerText = `${currentImageIndex + 1} / ${currentImages.length}`;
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        closeModal();
    }
}
