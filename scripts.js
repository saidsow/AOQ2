// Function to toggle accordion sections
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    header.classList.toggle("active");
    content.classList.toggle("active");

    // Reset opacity on close in mobile view
    if (window.innerWidth <= 768) {
        content.style.opacity = content.classList.contains("active") ? "1" : "0.8";
    }
}

// Load the navbar component dynamically
fetch('components/navbar.html')
    .then(response => response.text())
    .then(text => {
        document.getElementById('navbar').innerHTML = text;

        // Reinitialize Navbar Toggles for responsive behavior
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
            navbarToggler.addEventListener('click', () => {
                const navMenu = document.getElementById('navmenu');
                if (navMenu) {
                    navMenu.classList.toggle('show');
                }
            });
        }
    })
    .catch(err => console.error('Error loading navbar:', err));

// Load the bottom section dynamically
fetch('components/bottom.html')
    .then(response => response.text())
    .then(text => document.getElementById('bottom').innerHTML = text)
    .catch(err => console.error('Error loading bottom section:', err));

// Load the footer component dynamically
fetch('components/footer.html')
    .then(response => response.text())
    .then(text => document.getElementById('footer').innerHTML = text)
    .catch(err => console.error('Error loading footer:', err));

// Add a scroll listener to toggle a 'scrolled' class on the body
window.addEventListener('scroll', function () {
    document.body.classList.toggle('scrolled', window.scrollY > 0);
});
