
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

// const ToggleSubNav = (id) => {
//     const subNav = document.getElementById(id);
//     if (subNav.style.display === 'none') {
//         subNav.style.display = 'block';
//     } else {
//         subNav.style.display = 'none';
//     }
// };

const ToggleCategories = () => {
    const nav = document.getElementById('nav-main');
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
};


//  make generic and onload.

document.getElementById('nav-references-button').addEventListener("click", function() {
    const subcategory = document.getElementById('nav-references');
    const icon = document.getElementById(`nav-references-icon`);
    if (subcategory.style.display === 'none') {
        subcategory.style.display = 'block';
        icon.style.transform = 'rotate(90deg)';
      } else {
        subcategory.style.display = 'none';
        icon.style.transform = 'rotate(270deg)';
    }
})

document.getElementById('nav-guides-button').addEventListener("click", function() {
    const subcategory = document.getElementById('nav-guides');
    if (subcategory.style.display === 'none') {
        subcategory.style.display = 'block';
      } else {
        subcategory.style.display = 'none';
    }
})

document.getElementById('nav-premium-button').addEventListener("click", function() {
    const subcategory = document.getElementById('nav-premium');
    if (subcategory.style.display === 'none') {
        subcategory.style.display = 'block';
      } else {
        subcategory.style.display = 'none';
    }
})