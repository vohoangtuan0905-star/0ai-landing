// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Particles
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#6366f1" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#6366f1",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});

// Tracking Click
let count = localStorage.getItem("clickCount") || 0;
document.getElementById("counter").innerText = count;

function goTo0ai() {
    count++;
    localStorage.setItem("clickCount", count);
    document.getElementById("counter").innerText = count;
    window.open("https://0ai.vn", "_blank");
    
    // Animation for counter
    const counterElement = document.getElementById("counter");
    counterElement.style.transform = "scale(1.2)";
    setTimeout(() => {
        counterElement.style.transform = "scale(1)";
    }, 200);
}

// Play Demo Video
function playVideo() {
    // You can implement video modal here
    alert("Video demo sẽ được phát!");
}

// Navbar Scroll Effect
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Back to Top Button
window.addEventListener("scroll", function() {
    const backToTop = document.getElementById("back-to-top");
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect for Floating Shapes
document.addEventListener("mousemove", function(e) {
    const shapes = document.querySelectorAll(".shape");
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = 20 + (index * 10);
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Counter Animation for Stats
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start) + (end > 1000 ? "K+" : "");
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = document.querySelectorAll(".stat-number");
            stats.forEach(stat => {
                const value = stat.innerText;
                if (value.includes("K")) {
                    animateValue(stat, 0, parseInt(value), 2000);
                }
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelector(".hero-stats")?.forEach(stat => {
    observer.observe(stat);
});

// Hover Effect for Cards
document.querySelectorAll(".feature-card, .pricing-card, .testimonial-card").forEach(card => {
    card.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-10px)";
    });
    
    card.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0)";
    });
});

// Loading Animation
window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});

// Prevent default for demo links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
    });
});