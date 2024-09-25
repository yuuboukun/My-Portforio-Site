// ハンバーガーメニュー
const hamburger = document.querySelector('.header__menu');
const open = document.querySelector('.header__open-btn');
const close = document.querySelector('.header__close-btn');

// OPENボタンをクリックしたら
open.addEventListener('click', () => {
    hamburger.classList.add('js-active');
    open.classList.add('js-active');
    close.classList.add('js-active');
});

// CLOSEボタンをクリックしたら
close.addEventListener('click', () => {
    hamburger.classList.remove('js-active');
    open.classList.remove('js-active');
    close.classList.remove('js-active');
});

// 画面幅のサイズが変わったら
window.addEventListener('resize', () => {
    // console.log('resize');

    // ハンバーガーメニューを閉じる
    hamburger.classList.remove('js-active');
});