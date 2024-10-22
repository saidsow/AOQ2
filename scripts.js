// loadNavbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});

// scripts.js

// Load the footer dynamically
function loadFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the function to load the footer
loadFooter();


document.getElementById("accordionHeaderAthletes").addEventListener("click", function() {
    var accordionContainerAthletes = document.getElementById("accordionContainerAthletes");
    var accordionContainerBrands = document.getElementById("accordionContainerBrands");
    accordionContainerAthletes.style.display = accordionContainerAthletes.style.display === "none" ? "block" : "none";
    accordionContainerBrands.style.display = "none"; // Hide Brands section when Athletes is clicked
});

document.getElementById("accordionHeaderBrands").addEventListener("click", function() {
    var accordionContainerBrands = document.getElementById("accordionContainerBrands");
    var accordionContainerAthletes = document.getElementById("accordionContainerAthletes");
    accordionContainerBrands.style.display = accordionContainerBrands.style.display === "none" ? "block" : "none";
    accordionContainerAthletes.style.display = "none"; // Hide Athletes section when Brands is clicked
});
