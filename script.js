const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            event.preventDefault();
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const vaxlaButton = document.getElementById('växla');
let isLightMode = true;

vaxlaButton.addEventListener('click', () => {
    if (isLightMode) {
        document.body.style.backgroundColor = 'darkblue';
        document.body.style.color = 'white';
        navbarLinks.forEach(link => {
            link.style.color = 'lightblue';
        });
        isLightMode = false;
    } else {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        navbarLinks.forEach(link => {
            link.style.color = '';
        });
        isLightMode = true;
    }
});

const form = document.getElementById('contactForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (event) => {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

 
    if (!email || !message || message.length < 10) {
        event.preventDefault(); 
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none'; 
        alert('Formuläret skickades!');
    }
});