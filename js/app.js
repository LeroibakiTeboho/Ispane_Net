// Scroll Reveal

ScrollReveal(
    {
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
    }
);

ScrollReveal().reveal('.scrollreveal', {delay: 150});


// Log In and Sign Up

const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.login-container');

sign_up_btn.addEventListener('click', () => 
{
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => 
{
    container.classList.remove('sign-up-mode');
});
