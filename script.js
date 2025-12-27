// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".project-card, .section-header");
    var windowHeight = window.innerHeight;
    var elementVisible = 150;

    for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.add('reveal'); // Ensure class acts as a hook if not present
        var elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Optional: Remove active class to re-animate on scroll up
            // reveals[i].classList.remove("active");
        }
    }
}

// Initial check
window.addEventListener("load", reveal);
// Check on scroll
window.addEventListener("scroll", reveal);

// Smooth Scroll for anchor links (if browser doesn't support scroll-behavior: smooth)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
