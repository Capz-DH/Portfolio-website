

function init() {
  element = document.querySelector('.about-me');
  
}

function checkPosition() {
    
    if (window.scrollY >= 700 && window.scrollY < 1300) {
      element.classList.remove('noanim');
      element.classList.add('animme');
    }
    if (window.scrollY < 400 && element.classList.contains('animme') === true) {
        element.classList.remove('animme');
        element.classList.add('noanim');
        
    }
    if (window.scrollY < 400 && element.classList.contains('animme') === false) {
        return null;
        
    }
    if (window.scrollY >= 1300 && element.classList.contains('noanim') === true) {
        return null
        
    }
    if (window.scrollY >= 1300 && element.classList.contains('noanim') === false) {
        element.classList.remove('animme');
        element.classList.add('noanim');
        
    }
  
}

function socialInit() {
    menu = document.querySelector('.social-menu')

}


function socialsMenu() {
    if (window.scrollY > 700 ) {
        menu.classList.remove('socialanimremove')
        menu.classList.add('socialanim')
    }
    if (window.scrollY < 600 && menu.classList.contains('socialanim') === true) {
        menu.classList.remove('socialanim');
        menu.classList.add('socialanimremove');
        
    }
    if (window.scrollY < 600 && menu.classList.contains('socialanim') === false) {
        return null;
        
    }
   

}

window.addEventListener('scroll', socialsMenu);

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();

socialInit();

scrollSnapPolyfill()