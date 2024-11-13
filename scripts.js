function toggleAccordion(header) {
    const content = header.nextElementSibling;
    header.classList.toggle("active");
    content.classList.toggle("active");
}
