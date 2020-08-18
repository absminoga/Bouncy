class Bounce {
   constructor() {
      this.containerHeader = document.querySelector('header')
      this.containerMainHeader = document.querySelector('.main-header');

      this.headlineBtn = document.querySelector('.fa-arrow-circle-down');
      this.sectionOne = document.querySelector('.section_one');

      this.hamburgerBtn = document.querySelector('.hamburger-nav--btn');
      this.hamburgerInput = document.getElementById('menu_checkbox');
      this.hamburgerMenu = document.querySelector('.hamburger-nav-list');

      window.onscroll = () => this.heightHeader();

      this.headlineBtn.onclick = () => this.autoScroll();
      this.hamburgerBtn.onclick = () => this.addHamburgerMenu();
   }

   // -------------- Hamburger Menu -----------
   addHamburgerMenu() {
      this.hamburgerInput.onchange = () => {
         if (this.hamburgerInput.checked) {
            setTimeout(() => this.hamburgerMenu.classList.add('hamburger-list--active'), 500);
         } else {
            setTimeout(() => this.hamburgerMenu.classList.remove('hamburger-list--active'), 500);
         }
      }
   }
   // ----------------- Height and background header -------------
   heightHeader() {
      if (window.pageYOffset >= 150) {
         this.containerMainHeader.classList.add('main-header--height');
         this.containerHeader.classList.add('header--color');
      } else {
         this.containerMainHeader.classList.remove('main-header--height');
         this.containerHeader.classList.remove('header--color');
      }
   }
   // ----------------- Scroll section One -------------
   autoScroll() {
      let sectionOne = document.querySelector('.section_one');
      let containerMainHeader = document.querySelector('.main-header');
      let heightScroll = sectionOne.clientHeight - containerMainHeader.clientHeight
      window.scrollTo(0, heightScroll);
   }
};
let bounce = new Bounce();

// ------------------------- Tab ----------------------
let jsTriggers = document.querySelectorAll('.js-tab-trigger');
let jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function (trigger) {
   trigger.addEventListener('click', function () {
      let id = this.getAttribute('data-tab'),
         content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
         activeTrigger = document.querySelector('.js-tab-trigger.active_tab'),
         activeContent = document.querySelector('.js-tab-content.active');
      activeTrigger.classList.remove('active_tab');
      trigger.classList.add('active_tab');

      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});