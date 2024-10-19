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
 * スキルセット交差監視
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
	threshold: 0.3,
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
