
function openMenuBurger() {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.header__nav').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeMenuBurger() {
    document.querySelector('footer').style.display = 'flex';
    document.querySelector('.header__nav').classList.remove('open');
    document.body.style.overflow = 'auto';
  }