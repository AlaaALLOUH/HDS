document.addEventListener('DOMContentLoaded', () => {
    const trainItems = document.querySelectorAll('.Train-item');
    trainItems.forEach(item => {
        item.addEventListener('click', () => {
            trainItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });

    const moreInfoButtons = document.querySelectorAll('.more-info');
    moreInfoButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('More project details coming soon!');
        });
    });

    const adImages = document.querySelectorAll('.ad-banner a img');
    adImages.forEach(img => {
        img.addEventListener('mouseover', () => img.style.transform = 'scale(1.1)');
        img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% of the section is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // stop observing after adding the class
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  