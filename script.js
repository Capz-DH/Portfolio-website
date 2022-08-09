var elements;
var windowHeight;


function init() {
  elements = document.querySelectorAll('.noanim');
  windowHeight = window.innerHeight;
}

function checkPosition() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = elements[i].getBoundingClientRect().top;
//console.log(positionFromTop,windowHeight);
    if (positionFromTop - windowHeight <= -600) {
      element.classList.add('animme');
      element.classList.remove('noanim');
    }
        if (positionFromTop - windowHeight > 0) {/*newly added:Edit2*/
      element.classList.add('noanim');
      element.classList.remove('animme');
    }
  }
}

function socialInit() {
    menu = document.querySelector('.social-menu')
    pageHeight = document.body.scrollHeight;
    console.log(pageHeight)
}


function socialsMenu() {
    if (window.scrollY >= 700 ) {
        menu.classList.remove('socialanimremove')
        menu.classList.add('socialanim')
    }
    if (window.scrollY < 600 ) {
        menu.classList.remove('socialanim');
        menu.classList.add('socialanimremove');
        
    }
   

}

window.addEventListener('scroll', socialsMenu);

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();
socialInit();
