
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

const buttonEvents = () => {

    let subcategoryButtons = document.getElementsByClassName('nav-subcategories-button');

    for (i = 0; i < subcategoryButtons.length; i++) {
        let buttonId = subcategoryButtons[i].id;
        subcategoryButtons[i].addEventListener('click', function() {
            let category = buttonId.split('-')[1];
            let section = document.getElementById('nav-'+ category);
            let icon = document.getElementById(buttonId.replace(buttonId.slice(-7), '-icon'));

            if (section.style.display === 'none') {
                section.style.display = 'block';
                icon.style.transform = 'rotate(270deg)';    
            } else {
                section.style.display = 'none';
                icon.style.transform = 'rotate(90deg)';
            }
        }
    );
};
}

window.onload = (event) => {
    console.log('page is fully loaded');
    buttonEvents();
}

