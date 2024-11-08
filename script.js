// Menambahkan animasi pada elemen-elemen ketika halaman dimuat
window.addEventListener("load", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInLeftElements = document.querySelectorAll('.slide-in-left');
    const zoomInElements = document.querySelectorAll('.zoom-in');

    fadeInElements.forEach(element => {
        element.classList.add('fade-in');
    });

    slideInLeftElements.forEach(element => {
        element.classList.add('slide-in-left');
    });

    zoomInElements.forEach(element => {
        element.classList.add('zoom-in');
    });
});
