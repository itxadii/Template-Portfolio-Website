
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
    const formData = {
      name: form.elements[0].value,
      email: form.elements[1].value,
      message: form.elements[2].value,
      to_email: 'ezyadix@gmail.com'
    };

    emailjs.send('service_19gb3kp', 'template_ib9vwr7', formData, 'DlQutsyvspWR_G39B')
      .then(() => {
        alert('Message sent successfully!');
        form.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
      });
  });

  // Add orbit click handler for speed toggle
  const orbit = document.querySelector('.orbit');
  let isFast = false;
  
  orbit.addEventListener('click', () => {
    isFast = !isFast;
    orbit.style.animation = `rotate ${isFast ? '3s' : '10s'} linear infinite`;
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
