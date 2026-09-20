const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');
const menuLinks = navigation.querySelectorAll('a');

function closeMenu() {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
});

menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
        menuButton.focus();
    }
});

const desktopQuery = window.matchMedia('(min-width: 721px)');
desktopQuery.addEventListener('change', (event) => {
    if (event.matches) closeMenu();
});

document.getElementById('year').textContent = new Date().getFullYear();
