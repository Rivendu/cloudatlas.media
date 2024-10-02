// Intersection Observer to trigger animation when the section is in view
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById('content-section').classList.add('visible');
                observer.unobserve(entry.target); // To trigger only once
            }
        });
    });

    // Observe the section where you want the animation to trigger
    observer.observe(document.getElementById('content-section'));
});
