document.addEventListener("DOMContentLoaded", () => {
    // メニューボタン
    const menuBtn = document.querySelector(".menu-btn");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", () => {
        const isOpen = document.body.classList.contains("menu-open");
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener("click", closeMenu);

    function openMenu() {
        document.body.classList.add("menu-open");
        sideMenu.classList.add("open");
        overlay.classList.add("show");
    }

    function closeMenu() {
        document.body.classList.remove("menu-open");
        sideMenu.classList.remove("open");
        overlay.classList.remove("show");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const logoWhite = document.querySelector('.logo-white');
    const mainImage = document.querySelector('.main_visual-image');

    function updateLogoPosition() {
        const imageRect = mainImage.getBoundingClientRect();

        // main_visual-image の中央位置を計算
        const imageCenter = imageRect.top + imageRect.height / 2;
        const viewportCenter = window.innerHeight / 2;

        if (imageCenter <= viewportCenter) {
            // 画面中央に来たら固定
            logoWhite.classList.add('fixed');
        } else {
            // それより上では main_visual-image の中に配置
            logoWhite.classList.remove('fixed');
        }
    }

    window.addEventListener('scroll', updateLogoPosition);
    window.addEventListener('resize', updateLogoPosition);
    updateLogoPosition();
});


document.addEventListener('DOMContentLoaded', () => {
    const logoWhite = document.querySelector('.logo-white img');
    const mainVisual = document.querySelector('.main_visual');

    function updateClip() {
        const mainVisualRect = mainVisual.getBoundingClientRect();
        const logoRect = logoWhite.getBoundingClientRect();

        // logoWhite の下端が main_visual の下端を超えたら overlap を計算
        const overlap = (logoRect.bottom - mainVisualRect.bottom);

        if (overlap > 0) {
            // 下から overlap px 分だけ切る
            logoWhite.style.clipPath = `inset(0 0 ${overlap}px 0)`;
        } else {
            logoWhite.style.clipPath = 'inset(0 0 0 0)';
        }
    }

    window.addEventListener('scroll', updateClip);
    window.addEventListener('resize', updateClip); // リサイズ時も更新
    updateClip(); // 初期状態で呼ぶ

    // swiper
    const concept__swiper = new Swiper(".concept__swiper", {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 0,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // タブのボタン全部を取得
    const tabButtons = document.querySelectorAll(".point__button li");
    const tabImages = document.querySelectorAll(".point__img li");
    const tabTexts = document.querySelectorAll(".point__text li");

    // 最初の状態をアクティブに
    tabImages[0].classList.add("active");
    tabTexts[0].classList.add("active");
    tabButtons[0].classList.add("active");

    // ボタンをクリックしたら対応するタブを表示
    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // いったん全部リセット
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabImages.forEach((img) => img.classList.remove("active"));
            tabTexts.forEach((txt) => txt.classList.remove("active"));

            // クリックされたものだけアクティブに
            button.classList.add("active");
            tabImages[index].classList.add("active");
            tabTexts[index].classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // 要素の取得
    const modal = document.getElementById('lesson__modal');
    const closeBtn = document.getElementById('closeModalBtn');

    const openBtn = document.querySelectorAll('.modal__open');

    openBtn.forEach(open => {
        open.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = open.dataset.src;
        });
    });

    // 閉じるボタンでモーダルを閉じる
    closeBtn.addEventListener('click', () => {
        document.body.classList.remove("modal-open");
        modal.style.display = 'none';
    });

    // 背景クリックでも閉じる
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.classList.remove("modal-open");
            modal.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll('.faq__list--content');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {

            if (faq.classList.contains('open')) {
                // 閉じる
                faq.style.maxHeight = null;
                faq.classList.remove('open');
            } else {
                // 開く
                faq.style.maxHeight = faq.scrollHeight + "px"; // 中身の高さに合わせる
                faq.classList.add('open');
            }
        });
    });
});