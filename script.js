// =======================
// TRANSLATIONS OBJECT
// =======================
// Use your existing translations content here
const translations = {
    /* your translations object from before… */
};

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');
    const langButtons = document.querySelectorAll('.lang-btn');
    const videoPlaceholder = document.querySelector('.video-placeholder');
    const wishlistForm = document.querySelector('.wishlist-form');
    const wishlistEmail = document.querySelector('.wishlist-email');

    let currentLang = localStorage.getItem('language') || 'en';

    // Initialize language
    initializeLanguage();
    updateStats();
    updateDevUpdates();

    // Scroll behavior for header
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Smooth scroll for nav links
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            menuToggle.classList.remove('active');
            nav.classList.remove('active');

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const targetPos = targetSection.offsetTop - header.offsetHeight;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Language switcher
    langButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('language', lang);
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            changeLanguage(currentLang);
        });
    });

    function initializeLanguage() {
        langButtons.forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
        });
        changeLanguage(currentLang);
    }

    function changeLanguage(lang) {
        document.body.setAttribute('lang', lang);
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const translation = getNestedTranslation(translations[lang], key);
            if (translation) el.textContent = translation;
        });
        updatePlaceholders(lang);
        updateDevUpdates();
    }

    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((o, key) => o && o[key], obj);
    }

    function updatePlaceholders(lang) {
        if (wishlistEmail) {
            wishlistEmail.placeholder = lang === 'zh' ? '输入您的邮箱' : 'Enter your email';
        }
    }

    function updateStats() {
        if (typeof gameStats === 'undefined') return;
        try {
            const heroStats = document.querySelectorAll('.hero-stats .stat-number');
            if (heroStats[0]) heroStats[0].textContent = gameStats.followers > 0 ? gameStats.followers + '+' : '0';
            if (heroStats[1]) heroStats[1].textContent = gameStats.backers;
            if (heroStats[2]) heroStats[2].textContent = gameStats.fundedPercent + '%';

            const patreonStats = document.querySelectorAll('.patreon-stat .stat-value');
            if (patreonStats[0]) patreonStats[0].textContent = '$' + gameStats.raised.toLocaleString();
            if (patreonStats[1]) patreonStats[1].textContent = '$' + gameStats.goal.toLocaleString();
            if (patreonStats[2]) patreonStats[2].textContent = gameStats.backers;

            const progressFill = document.querySelector('.progress-fill');
            const progressText = document.querySelector('.progress-text');
            if (progressFill && progressText) {
                progressFill.style.width = gameStats.fundedPercent + '%';
                progressFill.setAttribute('data-progress', gameStats.fundedPercent);
                progressText.textContent = gameStats.fundedPercent + '%';
            }

            const releaseValues = document.querySelectorAll('.release-value');
            if (releaseValues[0]) releaseValues[0].textContent = gameStats.releaseDate;
            if (releaseValues[1]) releaseValues[1].textContent = gameStats.alphaDate;
        } catch (error) {
            console.error(error);
        }
    }

    function updateDevUpdates() {
        if (typeof gameStats === 'undefined' || !gameStats.updates) return;
        const updateCards = document.querySelectorAll('.update-card');
        gameStats.updates.forEach((update, index) => {
            if (updateCards[index]) {
                updateCards[index].querySelector('.update-date').textContent = update.date;
                updateCards[index].querySelector('h4').textContent = currentLang === 'en' ? update.titleEN : update.titleZH;
                updateCards[index].querySelector('p').textContent = currentLang === 'en' ? update.descEN : update.descZH;
            }
        });
    }

    // Video placeholder click
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function () {
            alert(currentLang === 'zh'
                ? '视频播放器将在此处打开！请替换为您的游戏预告片。'
                : 'Video player would open here! Replace with your game trailer.');
        });
    }

    // Wishlist form
    if (wishlistForm) {
        wishlistForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = wishlistEmail.value;
            alert(currentLang === 'zh'
                ? `谢谢！我们会在 Hello World! 发布时通知 ${email}！`
                : `Thank you! We'll notify ${email} when Hello World! launches!`);
            this.reset();
        });
    }

    // ===========================
    // ✅ Patreon Tier Buttons: New Tab + Popup message immediately
    // ===========================
    const tierBtns = document.querySelectorAll('.tier-btn');
    tierBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault(); // control the click completely

            // Open Patreon in a new tab immediately
            window.open(this.href, '_blank', 'noopener');

            // Tier name and message
            const tierName = this.closest('.tier-card').querySelector('.tier-name').textContent;
            const messages = {
                en: `Redirecting to Patreon for ${tierName} tier...`,
                zh: `正在跳转到 Patreon ${tierName} 等级...`
            };
            showPopup(messages[currentLang]);
        });
    });

// One-time donation button: open gift link in new tab + show popup
const oneTimeBtn = document.querySelector('.btn-patreon');
if (oneTimeBtn) {
    oneTimeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Open in new tab
        window.open(this.href, '_blank', 'noopener');
        // Show popup message
        const messages = {
            en: 'Redirecting to Patreon Gift Page...',
            zh: '正在跳转到 Patreon 礼物页面...'
        };
        showPopup(messages[currentLang]);
    });
}

    // Popup function (non-blocking)
    function showPopup(message) {
        const popup = document.createElement('div');
        popup.textContent = message;
        popup.style.position = 'fixed';
        popup.style.top = '20px';
        popup.style.right = '20px';
        popup.style.background = '#0a0e27';
        popup.style.color = '#fff';
        popup.style.padding = '10px 20px';
        popup.style.borderRadius = '8px';
        popup.style.boxShadow = '0 0 10px rgba(0,255,136,0.5)';
        popup.style.zIndex = '9999';
        popup.style.fontFamily = 'Rajdhani, sans-serif';
        popup.style.fontWeight = '600';
        popup.style.transition = 'opacity 0.5s ease';
        document.body.appendChild(popup);
        setTimeout(() => {
            popup.style.opacity = '0';
            setTimeout(() => popup.remove(), 500);
        }, 3000);
    }

    // Platform click messages for available platforms
    const platformBtns = document.querySelectorAll('.platform-btn:not(.disabled)');
    platformBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const platform = this.querySelector('.platform-name').textContent;
            alert(currentLang === 'zh'
                ? `${platform} 版本仍在开发中！`
                : `${platform} version is still in development!`);
        });
    });

    // First nav link active
    if (navLinks.length > 0) navLinks[0].classList.add('active');

    // Language toggle shortcut
    document.addEventListener('keydown', function (e) {
        if (e.altKey && e.key === 'l') {
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            const targetBtn = document.querySelector(`.lang-btn[data-lang="${newLang}"]`);
            if (targetBtn) targetBtn.click();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const targetPos = target.offsetTop - header.offsetHeight;
                    window.scrollTo({ top: targetPos, behavior: 'smooth' });
                }
            }
        });
    });
});
