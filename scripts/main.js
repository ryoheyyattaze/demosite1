//ハンバーガーメニュー
const cover = document.querySelector('.mobile_menu__cover');
const side = document.querySelector('.mobile_menu');
const links = document.querySelectorAll('.mobile_menu__link');
const btn = document.querySelector('.humberger');
function menuOpen() {
  const spans = document.querySelectorAll('.span');
  spans.forEach(span => {
    span.classList.toggle('menu-open');
  });
  btn.classList.toggle('menu-open');
  side.classList.toggle('menu-open');
}
btn.addEventListener('click', () => {
  menuOpen();
});
links.forEach(link => {
  link.addEventListener('click', () => {
    menuOpen();
  });
});
cover.addEventListener('click', () => {
  menuOpen();
});

//文字アニメーション
function TextAnimation(el) {
  el = document.querySelector(el);
  const str = el.innerHTML;
  const strArry = str.trim().split('');
  const result = strArry.reduce((acc, crr) => {
    return `${acc}<span class="target char">${crr}</span>`;
  }, '');
  el.innerHTML = result;
}

TextAnimation('.title1');
TextAnimation('.title2');
TextAnimation('.title3');


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
  rootMargin: "0px 0px 100px 0px",
}
const io = new IntersectionObserver(cb, options);
targets.forEach(target => {
  io.observe(target);
});


