// When the "Visit Us" button is clicked, scroll to the contact section
const visitButton = document.getElementById('visitButton');
const contactSection = document.getElementById('contact');

if (visitButton && contactSection) {
  visitButton.addEventListener('click', function () {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Simple form validation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form && formMessage) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const messageValue = document.getElementById('message').value.trim();

    if (!nameValue || !emailValue || !messageValue) {
      formMessage.textContent = 'Please fill in all required fields.';
      formMessage.style.color = 'red';
      return;
    }

    if (!emailValue.includes('@') || !emailValue.includes('.')) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      return;
    }

    formMessage.textContent = 'Thank you! Your message has been recieved.';
    formMessage.style.color = 'green';
    form.reset();
  });
}
