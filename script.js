
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    form.reset();
  });

  // Orbit speed control
  const orbit = document.querySelector('.orbit');
  let isSpeedUp = false;

  orbit.addEventListener('click', () => {
    isSpeedUp = !isSpeedUp;
    document.body.style.animationDuration = isSpeedUp ? '180s' : '360s';
    document.body.nextElementSibling.style.animationDuration = isSpeedUp ? '240s' : '480s';
    orbit.style.animationDuration = isSpeedUp ? '5s' : '10s';
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
  });
});
