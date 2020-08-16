class Bounce {
   constructor() {
      this.hamburgerBtn = document.querySelector('.hamburger-nav--btn');
      this.hamburgerInput = document.getElementById('menu_checkbox');
      this.hamburgerMenu = document.querySelector('.hamburger-nav-list');


      this.hamburgerBtn.onclick = () => this.addHamburgerMenu();
   }

   // -------------- Hamburger Menu -----------
   addHamburgerMenu() {
      this.hamburgerInput.onchange = () => {
         if (this.hamburgerInput.checked) {
            setTimeout(() => this.hamburgerMenu.classList.add('hamburger-list--active'), 500);
            console.log("Checked");
         } else {
            setTimeout(() => this.hamburgerMenu.classList.remove('hamburger-list--active'), 500);
            console.log("UNchecked");
         }
      }
   };

};
let bounce = new Bounce();

// ------------------------- Tab ----------------------
// let jsTriggers = document.querySelectorAll('.js-tab-trigger');
// let jsContents = document.querySelectorAll('.js-tab-content');

// jsTriggers.forEach(function (trigger) {
//    trigger.addEventListener('click', function () {
//        let id = this.getAttribute('data-tab'),
//            content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
//            activeTrigger = document.querySelector('.js-tab-trigger.active'),
//            activeContent = document.querySelector('.js-tab-content.active');
//        activeTrigger.classList.remove('active');
//        trigger.classList.add('active');

//        activeContent.classList.remove('active');
//        content.classList.add('active');
//    });
// });