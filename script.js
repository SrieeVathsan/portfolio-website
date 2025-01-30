const contactForm = document.querySelector('#contactForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form after submission (optional)
    contactForm.reset();
});

