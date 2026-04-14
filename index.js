// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize animations once DOM is loaded
document.addEventListener("DOMContentLoaded", (event) => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-effect', 'shadow-lg', 'py-3');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('glass-effect', 'shadow-lg', 'py-3');
            navbar.classList.add('py-4');
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileBtn = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.querySelector('.hidden.md\\:flex');
    let isMenuOpen = false;

    mobileBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-slate-900/95', 'backdrop-blur-md', 'p-6', 'shadow-xl');
            gsap.from(mobileMenu.children, {
                y: -10,
                opacity: 0,
                stagger: 0.1,
                duration: 0.3
            });
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-slate-900/95', 'backdrop-blur-md', 'p-6', 'shadow-xl');
        }
    });

    // Close mobile menu on clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth < 768) {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-slate-900/95', 'backdrop-blur-md', 'p-6', 'shadow-xl');
            }
        });
    });

    // Hero Section Animations
    const heroTl = gsap.timeline();
    
    // Animate "Govinda Sharma" 
    heroTl.to(".gs-name-reveal", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2
    })
    // Animate the rest of the hero items
    .to(".gs-reveal", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=0.6");

    // ScrollTrigger Animations
    
    // About Section
    gsap.fromTo(".gs-fade-right",
        { x: -50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }
    );

    gsap.fromTo(".gs-fade-left",
        { x: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        }
    );

    // Fade Up Elements (Headings, Contact)
    const fadeUpElements = gsap.utils.toArray('.gs-fade-up');
    fadeUpElements.forEach(elem => {
        gsap.fromTo(elem,
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            }
        );
    });

    // Stagger Cards (Skills)
    gsap.fromTo(".gs-stagger-card",
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }
    );

    // Project Cards
    gsap.fromTo(".gs-project-card",
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: "#projects",
                start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: "power3.out"
        }
    );
});
