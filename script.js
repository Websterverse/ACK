// LOCOMOTIVE JS FUNCTION -> FOR SMOOTH SCROLLING 
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
// CALLING FUNTION HERE //
// loco()


const menu = document.querySelector('.menu');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');

menu.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});


// ===============
// PAGE2 ANIMATION START HERE 

gsap.registerPlugin(ScrollTrigger);

gsap.to(".first", {
    scrollTrigger: {
        trigger: "#page2",
        start: "top 40%", // Start the animation when the top of the section reaches the center of the viewport
        end: "top 20% ", // End the animation when the top of the section reaches the top of the viewport
        scrub: true, // Smooth scroll effect
    },
    y: "-100%", // Move up and out of the container
    opacity: 0, // Fade out
    duration: .3
});

gsap.to(".sec", {
    scrollTrigger: {
        trigger: "#page2",
    start: "top center", // Start the animation when the top of the section reaches the center of the viewport
    end: "top top", // End the animation when the top of the section reaches the top of the viewport
    scrub: true, // Smooth scroll effect
  },
  y: "-100%", // Move up into the container
  opacity: 1, // Fade in
  duration: 1
});



gsap.to("#page2 button",{
    opacity:1,
    
    // y:"-100%",
    delay:1,
    duration:1 , 
    scrollTrigger: {
        trigger: "#page2",
        start: "top 0%", // Start the animation when the top of the section reaches the center of the viewport
        end: "top top", // End the animation when the top of the section reaches the top of the viewport
        scrub: true, // Smooth scroll effect
        // markers:true ,
    },
})
// PAGE2 ANIMATION END HERE 



// PAGE3 ANIMATION START HERE

// ?ANIMATION START HERE WHHITE TO BLACK

gsap.to(".bl",{
    width:"100%",
    height:"100%",
    opacity:1 ,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        scrub:1 , 
        stagger:1,
        pin:true 
    }
})



gsap.to("#page3 h2",{
    opacity:1,
    color:"white", 
    stagger:.1,
    scrollTrigger:{
        // markers:true ,
        trigger:".bl",
        scroller:"body",
        scrub:2,
        start:"top 20%",
        
    }
})

// ?ANIMATION END HERE WHITE TO BLACK


// PAGE3 ANIMATION END HERE 


// PAGE4 ANIMATION START HERE //

// PROJECT ANIMATION START HERE 

const section = document.querySelector('.section'),
sectionContainer = section.querySelector('.section_container'),
sectionCol = section.querySelectorAll('.section_col');

const isDesktop = window.matchMedia('(min-width:768px)');

// Function to initialize the animation
const init = () => {
    if (isDesktop.matches) {
        addEventListeners();
        // Trigger the middle sectionCol to expand on page load
        const middleIndex = Math.floor(sectionCol.length / 2);
        sectionCol[middleIndex].classList.add('active');
    }
};

// Function to add event listeners for mouse enter and click events
// const addEventListeners = () => {
//     // Click event to expand clicked sectionCol and collapse others
//     sectionCol.forEach((col) => {
//         col.addEventListener('click', () => {
//             sectionCol.forEach((el) => el.classList.remove('active'));
//             col.classList.add('active');
//         });
//     });
// };


// // Scroll-triggered animation for expanding sectionContainer
gsap.to(".section_container", {
    width: "100vw",
    scrollTrigger: {
        trigger: ".section_container",
        scroller: 'body',
        scrub: 2,
        // markers: true,
        start: "top 30%",
        end: "top 60%",
        //  ease: 'power3.inOut'

    }
});





const addEventListeners = () => {
    // Click event to expand clicked sectionCol and collapse others
    sectionCol.forEach((col) => {
        col.addEventListener('click', () => {
            sectionCol.forEach((el) => {
                if (el !== col) {
                    gsap.to(el, {
                        width: '5%', // Collapse others
                        ease: 'power3.inOut',
                        duration: 0.8
                    });
                    el.classList.remove('active');
                }
            });
            gsap.to(col, {
                width: '100%', // Expand the clicked one
                ease: 'power3.inOut',
                duration: 0.8
            });
            col.classList.add('active');
        });
    });
};

 // Call the function to add event listeners









// Initialize the behavior
init();





// PROJECT ANIMATION END  HERE 
