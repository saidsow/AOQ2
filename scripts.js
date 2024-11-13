function toggleAccordion(header) {
    const content = header.nextElementSibling;
    header.classList.toggle("active");
    content.classList.toggle("active");
    
    // Reset opacity on close in mobile view
    if (window.innerWidth <= 768) {
        content.style.opacity = content.classList.contains("active") ? "1" : "0.8";
    }
}
