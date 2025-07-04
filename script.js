document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  });
  
  document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  });