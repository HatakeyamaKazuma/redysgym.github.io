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

    // swiper
    const bg__text__swiper = new Swiper(".bg__text--swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        width: 2940,
        speed: 50000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const concept = document.querySelector(".concept");

    const items = [
        {
            img: document.querySelector(".point__heart"),
            on_btn: document.querySelector(".point__heart--button .on"),
            off_btn: document.querySelector(".point__heart--button .off"),
            txt: document.querySelector(".point__heart--text")
        },
        {
            img: document.querySelector(".point__music"),
            on_btn: document.querySelector(".point__music--button .on"),
            off_btn: document.querySelector(".point__music--button .off"),
            txt: document.querySelector(".point__music--text")
        },
        {
            img: document.querySelector(".point__body"),
            on_btn: document.querySelector(".point__body--button .on"),
            off_btn: document.querySelector(".point__body--button .off"),
            txt: document.querySelector(".point__body--text")
        }
    ];

    function showItem(index) {
        items.forEach((item, i) => {
            const isActive = (i === index);

            item.img.style.display = isActive ? "block" : "none";
            item.txt.style.display = isActive ? "block" : "none";

            item.on_btn.style.display = isActive ? "block" : "none";
            item.off_btn.style.display = isActive ? "none" : "block";
        });
    }

    // 最初は heart を表示
    showItem(0);

    // concept の高さ
    const conceptHeight = concept.offsetHeight;

    // 区間の設定（調整済み）
    const heartEnd = conceptHeight * 0.45;
    const musicEnd = conceptHeight * 0.70;

    // スクロール動作
    window.addEventListener("scroll", () => {
        const rect = concept.getBoundingClientRect();
        const progress = -rect.top;

        if (progress < heartEnd) {
            showItem(0);
        } else if (progress < musicEnd) {
            showItem(1);
        } else {
            showItem(2);
        }
    });

    // OFF ボタン → スクロール移動
    const sectionTop = concept.offsetTop;

    document.querySelector(".point__heart--button .off").addEventListener("click", () => {
        const offset = conceptHeight / 4;
        const targetTop = sectionTop + offset;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
    });

    document.querySelector(".point__music--button .off").addEventListener("click", () => {
        const offset = 0;
        const targetTop = sectionTop + offset;
        window.scrollTo({ top: targetTop + heartEnd, behavior: "smooth" });
    });

    document.querySelector(".point__body--button .off").addEventListener("click", () => {
        const offset = 0;
        const targetTop = sectionTop + offset;
        window.scrollTo({ top: targetTop + musicEnd, behavior: "smooth" });
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

            modalImg.src = open.dataset.src + '.png';
            modalVideo.src = open.dataset.src + '.mp4';
            modalVideoContent.src = open.dataset.src + '.mp4';
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

document.addEventListener("DOMContentLoaded", function () {
    const fades = document.querySelectorAll(".fade");

    function checkFade() {
        const scroll = window.scrollY;
        const wHeight = window.innerHeight;

        fades.forEach((el) => {
            const hit = el.getBoundingClientRect().top + scroll;
            let customTop = 100;
            const fadeAttr = el.dataset.fade;

            if (fadeAttr !== undefined) {
                customTop = Number(fadeAttr);
            }

            if (hit + customTop < wHeight + scroll) {
                el.classList.add("is-active");
            }
        });
    }

    // 初回実行（ページロード時）
    checkFade();

    // スクロール時にも実行
    window.addEventListener("scroll", checkFade);
});

document.addEventListener("DOMContentLoaded", function () {
    const fades = document.querySelectorAll(".bg_fade");
    const black__image = document.querySelectorAll(".black__image");
    const background = document.querySelector(".background.bk");

    function checkFade() {
        const scroll = window.scrollY;
        const wHeight = window.innerHeight;

        fades.forEach((el) => {
            const hit = el.getBoundingClientRect().top + scroll;
            let customTop = 200;
            const fadeAttr = el.dataset.fade;

            if (fadeAttr !== undefined) {
                customTop = Number(fadeAttr);
            }

            // 範囲内に入ったら is-active を付与
            // 範囲外に出たら is-active を削除
            const exitOffset = 600; // 好きな数値に調整（px）

            if (
                hit + customTop < wHeight + scroll &&
                hit + customTop + el.offsetHeight > scroll + exitOffset
            ) {
                el.classList.add("is-active");
                background.classList.add("active");
                // black__image 全てに active を追加
                black__image.forEach((img) => img.classList.add("active"));
            } else {
                el.classList.remove("is-active");
                background.classList.remove("active");
                // black__image 全てから active を削除
                black__image.forEach((img) => img.classList.remove("active"));
            }
        });
    }

    // 初回実行（ページロード時）
    checkFade();

    // スクロール時にも実行
    window.addEventListener("scroll", checkFade);
});


document.addEventListener("DOMContentLoaded", function () {
    const fades = document.querySelectorAll(".smooth");

    function checkFade() {
        const scroll = window.scrollY;
        const wHeight = window.innerHeight;

        fades.forEach((el) => {
            const hit = el.getBoundingClientRect().top + scroll;
            let customTop = 100;
            const fadeAttr = el.dataset.fade;

            if (fadeAttr !== undefined) {
                customTop = Number(fadeAttr);
            }

            if (hit + customTop < wHeight + scroll) {
                el.classList.add("is-active");
            }
        });
    }

    // 初回実行（ページロード時）
    checkFade();

    // スクロール時にも実行
    window.addEventListener("scroll", checkFade);
});


window.addEventListener("DOMContentLoaded", () => {

    const body = document.getElementById("body");
    const intro = document.querySelector(".intro-screen");
    const video = document.getElementById("heroVideo");
    const logo = document.querySelector(".logo-white");
    const bg = document.querySelector(".hero-bg");
    const hero_logo = document.querySelector(".hero-bg-logo");

    body.style.overflow = "hidden";

    // GIFを1.5秒表示してフェードアウト
    setTimeout(() => {
        intro.classList.add("fade-out");
    }, 1500);

    // 3秒後に動画再生
    setTimeout(() => {
        video.classList.add("fade-in");
        video.play();
    }, 1500 + 1500);

    // 4.5秒後に動画再生
    setTimeout(() => {
        logo.classList.add("fade-in");
        hero_logo.classList.add("fade-in");
        bg.classList.add("fade-out");
    }, 3000 + 1500);

    // 5.5秒後に動画再生
    setTimeout(() => {
        body.style.overflow = "scroll";
    }, 4500 + 1000);


    // 位置計算
    let positions = null;

    function calculatePositions() {
        const firstView = document.querySelector("#main .first-view .main_visual");
        const startPos = firstView.offsetTop;
        const endPos = startPos + firstView.offsetHeight - window.innerHeight;
        return { startPos, endPos };
    }

    function handleScroll() {
        const firstView = document.querySelector("#main .first-view .main_visual");
        const mvImage = document.querySelector("#main .first-view .main_visual .main_visual-image");

        if (!positions) {
            positions = calculatePositions();
        }

        const scroll = window.scrollY;
        const { startPos, endPos } = positions;

        if (scroll <= startPos) {
            Object.assign(mvImage.style, {
                position: "fixed",
                bottom: "50%",
                top: "50%",
                translate: "-50% -50%"
            });
            firstView.classList.remove("shrink");

        } else if (scroll < endPos) {
            Object.assign(mvImage.style, {
                position: "fixed",
                bottom: "50%",
                top: "50%",
                translate: "-50% -50%"
            });
            firstView.classList.add("shrink");

        } else {
            const firstViewHeight = firstView.offsetHeight;
            const mvImageHeight = mvImage.offsetHeight;
            const topPosition = firstViewHeight - mvImageHeight;

            Object.assign(mvImage.style, {
                position: "absolute",
                bottom: "auto",
                top: `${topPosition}px`,
                translate: "-50% 0"
            });
            firstView.classList.add("shrink");
        }
    }

    // =========================
    // 初回実行で縮小判定も行う
    // =========================
    handleScroll();

    // スクロールイベント
    window.addEventListener("scroll", handleScroll);

    // リサイズ時に再計算
    window.addEventListener("resize", () => {
        positions = null;
        handleScroll(); // <- これも呼ぶとより安全
    });

});
