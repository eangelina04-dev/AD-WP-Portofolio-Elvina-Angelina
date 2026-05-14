function revealSkills() {
    const elements = document.querySelectorAll(".reveal");
    
    elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
            
            // Khusus untuk memicu animasi Progress Bar
            const progressBars = el.querySelectorAll('.custom-progress-bar');
            progressBars.forEach(bar => {
                // Mengambil nilai lebar dari style HTML
                const targetWidth = bar.parentElement.previousElementSibling.querySelector('.text-accent').innerText;
                bar.style.width = targetWidth;
            });
        }
    });
}

window.addEventListener("load", revealSkills);
window.addEventListener("scroll", revealSkills);