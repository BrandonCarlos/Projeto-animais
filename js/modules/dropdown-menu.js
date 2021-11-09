import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  // Este SCRIPT e melhor para usar no MOBILE
  //Ou seja vou querer os 2 eventos o "touchstart" e o "click"
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    })
  })

  function handleClick(event) {
    event.preventDefault();
    console.log(event)
    this.classList.add('active');//this -> menu
    // Toda vez que o handleClick acontecer irá ativar a function outsideClick()
    outsideClick(this, ['touchstart', 'click'], () => {// () =>{}  <-- CALLBACK
      this.classList.remove('active')//<- remove a classe quando o OUTSIDE ocorrer
    });
  }
}
