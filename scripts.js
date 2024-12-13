function toggleAccordion(header) {
    const content = header.nextElementSibling;
    header.classList.toggle("active");
    content.classList.toggle("active");
    
    // Reset opacity on close in mobile view
    if (window.innerWidth <= 768) {
        content.style.opacity = content.classList.contains("active") ? "1" : "0.8";
    }
}

fetch('components/navbar.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('navbar').innerHTML = text);

  fetch('components/bottom.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('bottom').innerHTML = text);
  
  fetch('components/footer.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('footer').innerHTML = text);