"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bounce =
/*#__PURE__*/
function () {
  function Bounce() {
    var _this = this;

    _classCallCheck(this, Bounce);

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

    window.onscroll = function () {
      _this.heightHeader();

      _this.progressRing();
    };

    this.headlineBtn.onclick = function () {
      return _this.autoScroll();
    };

    this.hamburgerBtn.onclick = function () {
      _this.addHamburgerMenu();

      _this.scrollBlocking();
    };
  } // -------------- Hamburger Menu -----------


  _createClass(Bounce, [{
    key: "addHamburgerMenu",
    value: function addHamburgerMenu() {
      var _this2 = this;

      this.hamburgerInput.onchange = function () {
        if (_this2.hamburgerInput.checked) {
          setTimeout(function () {
            return _this2.hamburgerMenu.classList.add('hamburger-list--active');
          }, 500);
        } else {
          setTimeout(function () {
            return _this2.hamburgerMenu.classList.remove('hamburger-list--active');
          }, 500);
        }
      };
    } // -------------- Scroll Blocking -----------

  }, {
    key: "scrollBlocking",
    value: function scrollBlocking() {} // ----------------- Height and background header -------------

  }, {
    key: "heightHeader",
    value: function heightHeader() {
      if (window.pageYOffset >= 150) {
        this.containerMainHeader.classList.add('main-header--height');
        this.containerHeader.classList.add('header--color');
      } else {
        this.containerMainHeader.classList.remove('main-header--height');
        this.containerHeader.classList.remove('header--color');
      }
    } // ----------------- Scroll section One -------------

  }, {
    key: "autoScroll",
    value: function autoScroll() {
      var sectionOne = document.querySelector('.section_one');
      var containerMainHeader = document.querySelector('.main-header');
      var heightScroll = sectionOne.clientHeight - containerMainHeader.clientHeight;
      window.scrollTo(0, heightScroll);
    } // ---------------- Progress Ring bar;

  }, {
    key: "progressRing",
    value: function progressRing() {
      var box = this.sectionFive.getBoundingClientRect();
      this.circle.forEach(function (circle) {
        var radius = circle.r.baseVal.value;
        var circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
        circle.style.strokeDashoffset = circumference;

        if (window.pageYOffset >= box.top + pageYOffset - 150) {
          var percent = circle.dataset.persent;
          var offset = circumference - percent / 100 * circumference;
          circle.style.strokeDashoffset = offset;
        }
      });
    }
  }]);

  return Bounce;
}();

;
var bounce = new Bounce(); // ------------------------- Tab ----------------------

var jsTriggers = document.querySelectorAll('.js-tab-trigger');
var jsContents = document.querySelectorAll('.js-tab-content');
jsTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    var id = this.getAttribute('data-tab'),
        content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
        activeTrigger = document.querySelector('.js-tab-trigger.active_tab'),
        activeContent = document.querySelector('.js-tab-content.active');
    activeTrigger.classList.remove('active_tab');
    trigger.classList.add('active_tab');
    activeContent.classList.remove('active');
    content.classList.add('active');
  });
}); // ------------------------- Tab Skills ----------------------

var tabSkills = document.querySelectorAll('.js-tab-skills');
var jsContents2 = document.querySelectorAll('.tab_content_skills');
tabSkills.forEach(function (event) {
  event.addEventListener('click', function () {
    var idTab = this.getAttribute('data-tab'),
        text = document.querySelector('.tab_content_skills[data-tab="' + idTab + '"]'),
        activeTabSkills = document.querySelector('.js-tab-skills.active_tab_skills'),
        activeText = document.querySelector('.tab_content_skills.skills_active');
    activeTabSkills.classList.remove('active_tab_skills');
    event.classList.add('active_tab_skills');
    activeText.classList.remove('skills_active');
    text.classList.add('skills_active');
  });
}); // ------------------------- Swipe slider -------------------------

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 1000,
  mousewheel: true,
  keyboard: {
    enabled: true
  },
  effect: 'cube',
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var string = "Вот, что мне хотелось бы сказать на эту тему:";

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "\u2026" : str;
}

alert(truncate(string, 20));
alert(truncate(string, 10));
alert(truncate(string, 50));