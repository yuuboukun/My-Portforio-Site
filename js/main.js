/**
 * ローディングスクリーン
 */
const loadingAreaGrey = document.getElementById('loading');
const loadingAreaGreen = document.getElementById('loading_screen');
const loadingText = document.getElementById('loading_txt');

window.addEventListener('load', () => {
    // グレースクリーン
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    // グリーンスクリーン
    loadingAreaGreen.animate(
        {
            transform: ['translate(0, 100vh)', 'translate(0, 0)', 'translate(0, -100vh)'],
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );
    // ローディングテキスト
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8,
            },
            {
                opacity: 0,
                offset: 1
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});


/**
 * ハンバーガーメニュー
 */
const hamburger = document.querySelector('.header__menu');
const open = document.querySelector('.header__open-btn');
const close = document.querySelector('.header__close-btn');
const items = document.querySelectorAll('.header__item a');

// メニューアイテムをクリックしたら
items.forEach(item => {
    item.addEventListener('click', e => {
        const href = item.getAttribute('href');

        // ハンバーガーメニューを閉じる
        hamburger.classList.remove('js-active');
        open.classList.remove('js-active');
        close.classList.remove('js-active');

        if (href === "#") {
            // `#` の場合はデフォルト動作を許可（トップに戻る）
            return;
        }
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const scrollPosition = target.getBoundingClientRect().top + window.scrollY - 88;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});

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
    // ハンバーガーメニューを閉じる
    hamburger.classList.remove('js-active');
    open.classList.remove('js-active');
    close.classList.remove('js-active');
});

/**
 * ヒーローカルーセル
 */
var mySwiper1 = new Swiper('.swiper1', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'fade', // フェードエフェクトを指定
    fadeEffect: {
        crossFade: true, // 画像が重なるようにフェードアウト・フェードイン
    },
});

/**
 * 交差監視API
 */
function callback(entries, obs) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // ビューポートに入ったらクラスを追加してアニメーションを開始
            entry.target.classList.add('js-appear');
        } else {
            // ビューポート外に出たらクラスを削除してアニメーションをリセット
            entry.target.classList.remove('js-appear');
        }
    });
}

const observer = new IntersectionObserver(callback, {
    threshold: 0.5,
});

document.querySelectorAll('.js-animate').forEach(el => {
    observer.observe(el);
});

/**
 * 作品集カルーセル
 */
const mySwiper2 = new Swiper('.swiper2', {
    loop: true,
    grabCursor: true,
    speed: 1000, // スライドのスピードを1秒に設定
    navigation: {
        prevEl: '.my-button-prev',
        nextEl: '.my-button-next',
    },
    pagination: {
        el: '.swiper-pagination-works',
        clickable: true,
    },
    breakpoints: {
        // 767px以下の設定
        0: {
            slidesPerView: 1, // 表示するスライド数
            slidesPerGroup: 1, // 移動するスライド数
            spaceBetween: 25,
        },
        // 768px以上の設定
        768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 25,
        },
    },
});

/**
 *  セクションタイトルアニメーション
 */
const titles = document.querySelectorAll('.section-title__txt');
const enTexts = document.querySelectorAll('.section-title__txt-en');
const jaTexts = document.querySelectorAll('.section-title__txt-ja');

function animateText(element) {
    const text = element.textContent.trim();
    element.textContent = ''; // 元のテキストをクリア

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? "\u00A0" : char;
        span.style.transitionDelay = `${index * 0.08 + 0.5}s`; // 遅延を設定
        element.appendChild(span);
    });
}

// テキストのアニメーションを適用
enTexts.forEach(en => animateText(en));
jaTexts.forEach(ja => animateText(ja));

// Intersection Observer API
const textObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('js-upLetter');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// 全てのタイトルを監視対象に追加
titles.forEach(title => textObserver.observe(title));

// イメージのアニメーションを適用
const imgs = document.querySelectorAll('.section-title__img');

const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('js-showImg');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// 全てのイメージを監視対象に追加
imgs.forEach(img => imgObserver.observe(img));

/**
 * トップへボタン
 */
// トップへスクロールするボタンの要素を取得
const toTop = document.querySelector('.to-top');

// スクロールイベントリスナーを追加
window.addEventListener('scroll', function() {
    // スクロール位置が300よりも下の場合、ボタンを表示する
    if (window.scrollY > 300) {
        toTop.classList.add('js-topAppear');
    } else {
        toTop.classList.remove('js-topAppear');
    }
});

// ボタンがクリックされたときの処理
toTop.addEventListener('click', function(e) {
    e.preventDefault();
    // ページトップへアニメーションでスクロールする
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
