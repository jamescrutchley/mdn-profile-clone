
const CloseCta = () => {
    const popup = document.getElementById('cta-overlay');
    popup.style.display = 'none';
};


const ToggleNav = () => {
    const nav = document.getElementById('nav-main');
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
};


