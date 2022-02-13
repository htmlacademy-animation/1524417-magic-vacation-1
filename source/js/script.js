// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import AccentTypographyBuild from './modules/accent-typography-build';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const accentTypographyItems = {
  introTitle: {
    class: `.intro__title`,
    duration: 500,
    delays: [[200, 100, 0, 100, 150, 100, 0, 250, 150, 0, 150, 0], [400, 450, 350, 300, 400, 350]]
  },
  introintroDateTitle: {
    class: `.intro__date`,
    duration: 500,
    delays: [[1450, 1450], [1400], [1400, 1500, 1350, 1400, 1550], [1400], [1250, 1500, 1450, 1350]]
  },
  storySliderTitle: {
    class: `.slider__item-title`,
    duration: 500,
    delays: [[200, 100, 0, 100, 150, 100, 0]]
  },
  prizesTitle: {
    class: `.prizes__title`,
    duration: 500,
    delays: [[150, 100, 0, 100, 150]]
  },
  rulesTitle: {
    class: `.rules__title`,
    duration: 500,
    delays: [[300, 150, 100, 0, 200, 150, 0]]
  },
  gameTitle: {
    class: `.game__title`,
    duration: 500,
    delays: [[250, 150, 0, 100]]
  },
};

Object.keys(accentTypographyItems).forEach((item) => {
  item = new AccentTypographyBuild(accentTypographyItems[item].class, accentTypographyItems[item].duration, `active`, `transform`, accentTypographyItems[item].delays);

  item.runAnimation();
});


window.addEventListener(`load`, () => {
  document.body.classList.add(`loaded`);
});
