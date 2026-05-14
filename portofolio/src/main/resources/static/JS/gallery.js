function reveal() {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);


function showModalImage(imageSource) {
    const modalImage = document.getElementById("modalImage");
    
    modalImage.src = imageSource;
}