const skillsSection = document.querySelector(".skills");

const skillProgress = document.querySelectorAll(".skill-progress");


const skillsObserver = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        skillProgress.forEach((skill) => {

            const width = skill.dataset.width;

            skill.style.width = width;

        });

        skillsObserver.unobserve(skillsSection);

    }

});

skillsObserver.observe(skillsSection);


const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

const menuIcon = menuBtn.querySelector("i");

const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars");

    menuIcon.classList.toggle("fa-xmark");

});

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    });

});




const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        }

    });

});

revealElements.forEach((element) => {

    revealObserver.observe(element);

})



const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section");

const navObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            navLinks.forEach((link) => {

                link.classList.remove("active");

            });

            const activeLink = document.querySelector(
                `.nav a[href="#${entry.target.id}"]`
            );

            if (activeLink) {

                activeLink.classList.add("active");

            }
        
        }

    });

}, {

    threshold: 0.5

});

sections.forEach((section) => {

    navObserver.observe(section);

});





const header =  document.querySelector(".header");

window.addEventListener("scroll", ()=> {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});




const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", ()=> {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", ()=> {

    window.scrollTo ({

        top: 0,
        behavior: "smooth"
    });

});



document.querySelectorAll('.description-toggle').forEach(button => {

    button.addEventListener('click', () => {

        const wrapper = button.closest('.project-description-wrapper');

        const description = wrapper.querySelector('.project-description');

        const isExpanded = description.classList.contains('expanded');

        if (isExpanded) {

            description.classList.remove('expanded');

            button.classList.remove('active');

            button.innerHTML =  `
            More
            <i class="fa-solid fa-chevron-down"></i>
            `;
        } else {

            description.classList.add('expanded');

            button.classList.add('active');

            button.innerHTML = `
            Less
            <i class="fa-solid fa-chevron-down"></i>
            `;

        }

    });

});