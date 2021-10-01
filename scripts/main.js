//ハンバーガーメニュー
const cover = document.querySelector('.mobile_menu__cover');
const side = document.querySelector('.mobile_menu');
const links = document.querySelectorAll('.mobile_menu__link');
const btn = document.querySelector('.header__btn');
function menuOpen() {
  const spans = document.querySelectorAll('#span');
  spans.forEach(span => {
    span.classList.toggle('menu-open');
  });
  // cover.classList.toggle('menu-open');
  btn.classList.toggle('menu-open');
  side.classList.toggle('menu-open')
}
btn.addEventListener('click', () => {
  menuOpen();
});
links.forEach(link => {
  link.addEventListener('click', () => {
    menuOpen();
  });
});
// cover.addEventListener('click', () => {
//   menuOpen();
// });


//スクロールオブザーバー
const targets = document.querySelectorAll('.target');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('inview');
    }
  });
}
const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
}
const io = new IntersectionObserver(cb, options);
targets.forEach(target => {
  io.observe(target);
});


//文字アニメーション
class TextAniamtion {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split('');
    this.el.innerHTML = this._tagText();
  }
  _tagText() {
    return this.chars.reduce((acc, crr) => {
      return `${acc}<span class="char">${crr}</span>`;
    }, '');
  }
}

const str1 = new TextAniamtion('.concept__title');
const str2 = new TextAniamtion('.menues__title');
const str3 = new TextAniamtion('.store__title');
