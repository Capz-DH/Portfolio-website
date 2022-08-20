

function init() {
  element = document.querySelector('.about-me');
  
}

function aboutMePosition() {
    
    if (window.scrollY >= 600 && window.scrollY < 1300) {
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
function skillsInit() {
    skills = document.querySelector('.skills-title');
    
}
function skillsPosition() {
      
      if (window.scrollY >= 700 && window.scrollY < 1500) {
        skills.classList.remove('unanimate-skills');
        skills.classList.add('animate-skills');
      }
      if (window.scrollY < 400 && skills.classList.contains('animate-skills') === true) {
          skills.classList.remove('animate-skills');
          skills.classList.add('unanimate-skills');
          
      }
      if (window.scrollY < 400 && skills.classList.contains('animate-skills') === false) {
          return null;
          
      }
      if (window.scrollY >= 1500 && skills.classList.contains('unanimate-skills') === true) {
          return null
          
      }
      if (window.scrollY >= 1500 && skills.classList.contains('unanimate-skills') === false) {
          skills.classList.remove('animate-skills');
          skills.classList.add('unanimate-skills');
          
      }
    
}
function techInit() {
    tech = document.querySelector('.technical');
    
}
function techPosition() {
      
      if (window.scrollY >= 700 && window.scrollY < 1500) {
        tech.classList.remove('unanimate-tech');
        tech.classList.add('animate-tech');
      }
      if (window.scrollY < 400 && tech.classList.contains('animate-tech') === true) {
          tech.classList.remove('animate-tech');
          tech.classList.add('unanimate-tech');
          
      }
      if (window.scrollY < 400 && tech.classList.contains('animate-tech') === false) {
          return null;
          
      }
      if (window.scrollY >= 1500 && tech.classList.contains('unanimate-tech') === true) {
          return null
          
      }
      if (window.scrollY >= 1500 && tech.classList.contains('unanimate-tech') === false) {
          tech.classList.remove('animate-tech');
          tech.classList.add('unanimate-tech');
          
      }
    
}
function nontechInit() {
    nontech = document.querySelector('.non-technical');
    
}
function nonTechPosition() {
      
    if (window.scrollY >= 700 && window.scrollY < 1500) {
      nontech.classList.remove('unanimate-nontech');
      nontech.classList.add('animate-nontech');
    }
    if (window.scrollY < 400 && nontech.classList.contains('animate-nontech') === true) {
        nontech.classList.remove('animate-nontech');
        nontech.classList.add('unanimate-nontech');
        
    }
    if (window.scrollY < 400 && nontech.classList.contains('animate-nontech') === false) {
        return null;
        
    }
    if (window.scrollY >= 1500 && nontech.classList.contains('unanimate-nontech') === true) {
        return null
        
    }
    if (window.scrollY >= 1500 && nontech.classList.contains('unanimate-nontech') === false) {
        nontech.classList.remove('animate-nontech');
        nontech.classList.add('unanimate-nontech');
        
    }
  
}
function rebirthButtonSelector() {
    rebirthButton = document.querySelector('.rebirth-right-content-button')
}
function isInViewPort() {
    var buttonBounding = rebirthButton.getBoundingClientRect();

    if (
        buttonBounding.top >= 0 &&
        buttonBounding.left >= 0 &&
        buttonBounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        buttonBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        rebirthButton.classList.add('experience-button-anim')
    } else {
           
    }
}
function rebirthParaSelector() {
    rebirthPara = document.querySelector('.rebirth-right-content-para')
}
function rebirthParaInIt() {
    var paraBounding = rebirthPara.getBoundingClientRect();

    if (
        paraBounding.top >= 0 &&
        paraBounding.left >= 0 &&
        paraBounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        paraBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        rebirthPara.classList.add('experience-para-anim')
    } else {
           
    }
}
function rebirthImgSelector() {
    rebirthImg = document.querySelector('.rebirth-content-img')
}
function rebirthImgInIt() {
    var imgBounding = rebirthImg.getBoundingClientRect();

    if (
        imgBounding.top >= 0 &&
        imgBounding.left >= 0 &&
        imgBounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        imgBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        rebirthImg.classList.add('rebirth-img-anim')
    } else {
           
    }
}
function rebirthTitleSelector() {
    rebirthTitle = document.querySelector('.rebirth-title')
}
function rebirthTitleInIt() {
    var TitleBounding = rebirthTitle.getBoundingClientRect();

    if (
        TitleBounding.top >= 0 &&
        TitleBounding.left >= 0 &&
        TitleBounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        TitleBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        rebirthTitle.classList.add('rebirth-title-anim')
    } else {
           
    }
}

window.addEventListener('scroll', socialsMenu);
window.addEventListener('scroll', aboutMePosition);
window.addEventListener('scroll', skillsPosition);
window.addEventListener('scroll', techPosition);
window.addEventListener('scroll', nonTechPosition);
window.addEventListener('scroll', isInViewPort);
window.addEventListener('scroll', rebirthParaInIt);
window.addEventListener('scroll', rebirthImgInIt);
window.addEventListener('scroll', rebirthTitleInIt);

init();
socialInit();
skillsInit();
techInit();
nontechInit();
rebirthButtonSelector();
rebirthParaSelector();
rebirthImgSelector();
rebirthTitleSelector();