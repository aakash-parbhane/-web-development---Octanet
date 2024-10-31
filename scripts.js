// You can add interactivity here if needed
document.querySelectorAll('.variant').forEach(item => {
    item.addEventListener('click',

        const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${(i - index) * 100}%)`;
            });
        }
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            }
        });

        // Function to observe when features come into view
document.addEventListener("DOMContentLoaded", function() {
    const features = document.querySelectorAll('.feature');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');  // Add the 'in-view' class when in view
            }
        });
    }, {
        threshold: 0.1  // Trigger when 10% of the element is in view
    });
    
    features.forEach(feature => {
        observer.observe(feature);  // Observe each feature element
    });
});

