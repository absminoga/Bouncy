class Bounce {
   constructor() {
      this.body = document.querySelector('body');
      this.containerHeader = document.querySelector('header');
      this.containerMainHeader = document.querySelector('.main-header');

      this.headlineBtn = document.querySelector('.fa-arrow-circle-down');
      this.sectionOne = document.querySelector('.section_one');
      this.sectionFive = document.querySelector('.section_five');

      this.hamburgerBtn = document.querySelector('.hamburger-nav--btn');
      this.hamburgerInput = document.getElementById('menu_checkbox');
      this.hamburgerMenu = document.querySelector('.hamburger-nav-list');

      this.circle = document.querySelectorAll(".progress-ring__circle");

      window.onscroll = () => {
         this.heightHeader();
         this.progressRing();
      }

      this.headlineBtn.onclick = () => this.autoScroll();
      this.hamburgerBtn.onclick = () => {
         this.addHamburgerMenu();
         this.scrollBlocking();
      }
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
   // -------------- Scroll Blocking -----------
   scrollBlocking() {

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

   // ---------------- Progress Ring bar;
   progressRing() {
      let box = this.sectionFive.getBoundingClientRect();
      this.circle.forEach(function (circle) {
         let radius = circle.r.baseVal.value;
         let circumference = 2 * Math.PI * radius;
         circle.style.strokeDasharray = `${circumference} ${circumference}`;
         circle.style.strokeDashoffset = circumference;
         if (window.pageYOffset >= (box.top + pageYOffset - 150)) {
            let percent = circle.dataset.persent;
            let offset = circumference - percent / 100 * circumference
            circle.style.strokeDashoffset = offset
         }
      })
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
// ------------------------- Tab Skills ----------------------
let tabSkills = document.querySelectorAll('.js-tab-skills');
let jsContents2 = document.querySelectorAll('.tab_content_skills');

tabSkills.forEach(function (event) {
   event.addEventListener('click', function () {
      let idTab = this.getAttribute('data-tab'),
         text = document.querySelector('.tab_content_skills[data-tab="' + idTab + '"]'),
         activeTabSkills = document.querySelector('.js-tab-skills.active_tab_skills'),
         activeText = document.querySelector('.tab_content_skills.skills_active');
      activeTabSkills.classList.remove('active_tab_skills');
      event.classList.add('active_tab_skills');

      activeText.classList.remove('skills_active');
      text.classList.add('skills_active');
   });
});
// ------------------------- Swipe slider -------------------------
var mySwiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 1000,
   mousewheel: true,
   keyboard: {
      enabled: true,
   },
   effect: 'cube',
   cubeEffect: {
      shadow: false,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});


let string = "Вот, что мне хотелось бы сказать на эту тему:";

function truncate(str, maxlength) {
   return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "\u2026" : str;

}

alert(truncate(string, 20));
alert(truncate(string, 10));
alert(truncate(string, 50));