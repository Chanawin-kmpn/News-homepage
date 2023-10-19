const wrapperBg = document.querySelector('.wrapper');
const navWrapper = document.querySelector('.nav-container');
const navBtn = document.querySelector('.mobile-nav-btn');
const iconMenu = document.querySelector('.icon-menu');

navBtn.addEventListener('click', () => {
    const visibility = navWrapper.getAttribute('data-visible');
    
    if (visibility === "false") {
        wrapperBg.setAttribute('data-backdrop', 'true')
        navWrapper.setAttribute('data-visible', 'true')
        navBtn.setAttribute('aria-expanded', 'true')
        iconMenu.src = "./assets/images/icon-menu-close.svg"
    } else if (visibility === "true") {
        wrapperBg.setAttribute('data-backdrop', 'false')
        navWrapper.setAttribute('data-visible', 'false')
        navBtn.setAttribute('aria-expanded', 'false')
        iconMenu.src = "./assets/images/icon-menu.svg"
    }
})