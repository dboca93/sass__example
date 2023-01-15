const menuBtn = document.querySelector('.menu-btn'); 
// for the div containg the burger

const hamburger = document.querySelector('.menu-btn__burger'); 
// for the actual hamburger itself that lies within the div; 

const nav = document.querySelector('.nav'); 
const menuNav = document.querySelector('.menu-nav'); 
const navItems = document.querySelectorAll('.menu-nav__item'); 

let showMenu = false; 

menuBtn.addEventListener('click', toggleMenu); 
/* * so when we click on the surrounding div, 
the function togglemenu is triggered. 

*/

function toggleMenu() {
    if (!showMenu) { // same as writing if (showMenu === false)
        hamburger.classList.add('open'); // add the open class
        nav.classList.add('open'); 
        menuNav.classList.add('open'); 
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true; // then we leave showMenu as true 
        // so that on the next click:
    } else { 
        hamburger.classList.remove('open'); // remove the open class
        nav.classList.remove('open'); 
        menuNav.classList.remove('open'); 
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false; 
    }
}

// so the open class with the css is only present 
// after we click ? 

