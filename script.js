// =======================
// TRANSLATIONS OBJECT
// =======================
// (Use your existing translations object from before here)
const translations = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      gameplay: 'Gameplay',
      support: 'Support',
      download: 'Download'
    },
    hero: {
      subtitle: 'Enter a new dimension of combat',
      description: 'Experience the ultimate fusion of RPG depth and FPS intensity in a stunning 3D world',
      supportNow: 'Support Now',
      watchTrailer: 'Watch Trailer',
      followers: 'Followers',
      backers: 'Backers',
      funded: 'Funded',
      scrollToExplore: 'Scroll to explore'
    },
    features: {
      title: 'Game Features',
      openWorld: { title: 'Massive Open World', desc: 'Explore a vast 3D universe filled with secrets, dungeons, and epic landscapes' },
      combat: { title: 'Dynamic Combat', desc: 'Master both ranged and melee combat with fluid FPS mechanics and RPG abilities' },
      customization: { title: 'Character Customization', desc: 'Create your unique hero with deep skill trees and endless equipment options' },
      multiplayer: { title: 'Multiplayer Co-op', desc: 'Team up with friends in epic raids and PvP battles' },
      story: { title: 'Rich Storyline', desc: 'Uncover the mysteries of the digital realm in an immersive narrative' },
      graphics: { title: 'Stunning Graphics', desc: 'Experience breathtaking visuals powered by cutting-edge technology' }
    },
    gameplay: {
      title: 'Gameplay Preview',
      subtitle: 'Immersive Combat Experience',
      clickToWatch: 'Click to watch trailer',
      ai: { title: 'Advanced AI Enemies', desc: 'Face intelligent foes that adapt to your playstyle' },
      strategy: { title: 'Real-time Strategy', desc: 'Plan your attacks and use the environment to your advantage' },
      crafting: { title: 'Weapon Crafting', desc: 'Forge legendary weapons from materials found in your journey' },
      bosses: { title: 'Boss Battles', desc: 'Challenge epic bosses that require skill and strategy to defeat' }
    },
    patreon: {
      badge: 'Pre-Development',
      title: 'Support the Development',
      subtitle: 'Hello World! is currently in pre-development. Your support will help bring this epic adventure to life!',
      raised: 'Raised',
      goal: 'Goal',
      backers: 'Backers',
      perMonth: '/month',
      mostPopular: 'Most Popular',
      selectTier: 'Select Tier',
      ctaText: 'Not ready to commit? You can also make a one-time contribution!',
      oneTime: 'One-Time Donation',
      recentUpdates: 'Recent Development Updates',
      viewAllUpdates: 'View All Updates',
      tiers: {
        supporter: {
          name: 'Supporter',
          benefit1: 'Access to development blog',
          benefit2: 'Discord supporter role',
          benefit3: 'Your name in credits',
          benefit4: 'Exclusive wallpapers'
        },
        champion: {
          name: 'Champion',
          benefit1: 'All Supporter benefits',
          benefit2: 'Early alpha access',
          benefit3: 'Exclusive in-game items',
          benefit4: 'Monthly dev Q&A',
          benefit5: 'Vote on game features'
        },
        legend: {
          name: 'Legend',
          benefit1: 'All Champion benefits',
          benefit2: 'Design your own NPC',
          benefit3: 'Private Discord channel',
          benefit4: 'Lifetime game license',
          benefit5: 'Special edition merchandise',
          benefit6: 'Video call with dev team'
        }
      }
    },
    download: {
      comingSoon: 'Coming Soon',
      title: 'Ready to Start Your Adventure?',
      subtitle: 'Join thousands of players in the world of Hello World!',
      expectedRelease: 'Expected Release',
      alphaAccess: 'Alpha Access',
      inDevelopment: 'In Development',
      wishlistTitle: 'Get Notified on Release',
      wishlistDesc: 'Be the first to know when Hello World! launches',
      notify: 'Notify Me',
      minRequirements: 'Minimum System Requirements',
      requirementsNote: '(Subject to change during development)',
      os: 'OS:',
      osValue: 'Windows 10 64-bit',
      processor: 'Processor:',
      memory: 'Memory:',
      graphics: 'Graphics:'
    },
    footer: {
      copyright: '© 2026 Hello World! All rights reserved.',
      game: 'Game',
      about: 'About',
      news: 'News',
      updates: 'Updates',
      community: 'Community',
      forums: 'Forums',
      wiki: 'Wiki',
      support: 'Support',
      helpCenter: 'Help Center',
      contact: 'Contact',
      followUs: 'Follow Us'
    }
  },
  zh: {
    nav: {
      home: '首页',
      features: '特色',
      gameplay: '游戏玩法',
      support: '支持',
      download: '下载'
    },
    hero: {
      subtitle: '进入全新的战斗维度',
      description: '在令人惊叹的3D世界中体验RPG深度与FPS强度的终极融合',
      supportNow: '立即支持',
      watchTrailer: '观看预告',
      followers: '关注者',
      backers: '支持者',
      funded: '已筹集',
      scrollToExplore: '向下滚动探索'
    },
    features: {
      title: '游戏特色',
      openWorld: { title: '庞大开放世界', desc: '探索充满秘密、地下城和史诗景观的广阔3D宇宙' },
      combat: { title: '动态战斗', desc: '掌握远程与近战战斗，流畅的FPS机制结合RPG能力' },
      customization: { title: '角色定制', desc: '通过深度技能树和无限装备选项塑造独特英雄' },
      multiplayer: { title: '多人合作', desc: '与朋友组队参加史诗团队副本和PvP战斗' },
      story: { title: '丰富剧情', desc: '在沉浸式叙事中揭开数字领域的奥秘' },
      graphics: { title: '震撼画面', desc: '体验由尖端技术驱动的惊艳视觉效果' }
    },
    gameplay: {
      title: '游戏预览',
      subtitle: '沉浸式战斗体验',
      clickToWatch: '点击观看预告片',
      ai: { title: '高级AI敌人', desc: '面对能适应你玩法的智能敌人' },
      strategy: { title: '实时策略', desc: '策划攻击并利用环境优势' },
      crafting: { title: '武器锻造', desc: '用旅途中找到的材料锻造传奇武器' },
      bosses: { title: 'Boss战斗', desc: '挑战需要技巧和策略的史诗Boss' }
    },
    patreon: {
      badge: '预开发阶段',
      title: '支持开发',
      subtitle: 'Hello World! 当前处于预开发阶段。您的支持将帮助这一史诗冒险成为现实！',
      raised: '已筹集',
      goal: '目标',
      backers: '支持者',
      perMonth: '/月',
      mostPopular: '最受欢迎',
      selectTier: '选择等级',
      ctaText: '还没准备好承诺？您也可以进行一次性捐赠！',
      oneTime: '一次性捐赠',
      recentUpdates: '最新开发动态',
      viewAllUpdates: '查看所有更新',
      tiers: {
        supporter: {
          name: '支持者',
          benefit1: '访问开发博客',
          benefit2: 'Discord支持者角色',
          benefit3: '您的名字在制作人员名单中',
          benefit4: '独家壁纸'
        },
        champion: {
          name: '勇士',
          benefit1: '所有支持者福利',
          benefit2: '提前体验Alpha版本',
          benefit3: '独家游戏内物品',
          benefit4: '每月开发者问答',
          benefit5: '参与游戏功能投票'
        },
        legend: {
          name: '传奇',
          benefit1: '所有勇士福利',
          benefit2: '设计你自己的NPC',
          benefit3: '私人Discord频道',
          benefit4: '终身游戏许可',
          benefit5: '特别版周边商品',
          benefit6: '与开发团队视频通话'
        }
      }
    },
    download: {
      comingSoon: '即将推出',
      title: '准备开始你的冒险了吗？',
      subtitle: '加入成千上万的玩家，进入Hello World的世界！',
      expectedRelease: '预计发布',
      alphaAccess: 'Alpha测试',
      inDevelopment: '开发中',
      wishlistTitle: '获取发布通知',
      wishlistDesc: '第一时间了解Hello World的发布信息',
      notify: '通知我',
      minRequirements: '最低系统要求',
      requirementsNote: '(开发过程中可能会有变化)',
      os: '操作系统：',
      osValue: 'Windows 10 64位',
      processor: '处理器：',
      memory: '内存：',
      graphics: '显卡：'
    },
    footer: {
      copyright: '© 2026 Hello World! 版权所有。',
      game: '游戏',
      about: '关于',
      news: '新闻',
      updates: '更新',
      community: '社区',
      forums: '论坛',
      wiki: '百科',
      support: '支持',
      helpCenter: '帮助中心',
      contact: '联系',
      followUs: '关注我们'
    }
  }
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

    // Language switcher buttons
    langButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('language', lang);

            // Update button styles
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Translate entire page
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
        // Update body lang attribute for CSS font switching
        document.body.setAttribute('lang', lang);

        // Translate all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const translation = getNestedTranslation(translations[lang], key);
            if (translation) el.textContent = translation;
        });

        // Update placeholders
        updatePlaceholders(lang);

        // Update development updates section
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

    // Video placeholder click - Embed YouTube
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function () {
            const videoFrame = document.getElementById('videoFrame');
            if (videoFrame) {
                videoFrame.src = 'https://youtu.be/tUjlefu-PrE?si=Ldqgy8tNGfbUDzvF?autoplay=1';
                videoFrame.style.display = 'block';
                videoPlaceholder.style.display = 'none';
            }
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
    // Patreon Tier Buttons
    // ===========================
    const tierBtns = document.querySelectorAll('.tier-btn');
    tierBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open(this.href, '_blank', 'noopener');
            const tierName = this.closest('.tier-card').querySelector('.tier-name').textContent;
            const messages = {
                en: `Redirecting to Patreon for ${tierName} tier...`,
                zh: `正在跳转到 Patreon ${tierName} 等级...`
            };
            showPopup(messages[currentLang]);
        });
    });

    // One-time donation button
    const oneTimeBtn = document.querySelector('.btn-patreon');
    if (oneTimeBtn) {
        oneTimeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.open(this.href, '_blank', 'noopener');
            const messages = {
                en: 'Redirecting to Patreon Gift Page...',
                zh: '正在跳转到 Patreon 礼物页面...'
            };
            showPopup(messages[currentLang]);
        });
    }

    // Popup function for messages
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

    // Platform buttons (non-disabled)
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
