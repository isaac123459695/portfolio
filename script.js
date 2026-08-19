const navbarLinks = document.querySelectorAll('.navbar a');

// Lägg till en klickhändelse för varje länk
navbarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 

        // Hämta målet från href-attributet
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scrolla smidigt till målet
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});