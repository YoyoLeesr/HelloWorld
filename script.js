// Complete Translation Database
// (your translations object here - unchanged)
const translations = { /* ... as before ... */ };

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');
  const langButtons = document.querySelectorAll('.lang-btn');
  const videoPlaceholder = document.querySelector('.video-placeholder');
  const wishlistForm = document.querySelector('.wishlist-form');
  const wishlistEmail = document.querySelector('.wishlist-email');

  // Current language
  let currentLang = localStorage.getItem('language') || 'en';

  // Initialize language on load
  initializeLanguage();

  // Update stats from config.js
  updateStats();

  // Update dev updates from config.js
  updateDevUpdates();

  // Header scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (menuToggle) menuToggle.classList.remove('active');
      if (nav) nav.classList.remove('active');
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        navLinks.forEach(function(l) { l.classList.remove('active'); });
        this.classList.add('active');
      }
    });
  });

  // Language switcher
  langButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      currentLang = lang;
      localStorage.setItem('language', lang);
      langButtons.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      changeLanguage(currentLang);
    });
  });

  // Initialize language
  function initializeLanguage() {
    langButtons.forEach(function(btn) {
      if (btn.getAttribute('data-lang') === currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    changeLanguage(currentLang);
  }

  // Change language function
  function changeLanguage(lang) {
    document.body.setAttribute('lang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(element) {
      const key = element.getAttribute('data-i18n');
      const translation = getNestedTranslation(translations[lang], key);
      if (translation) {
        element.textContent = translation;
      }
    });
    updatePlaceholders(lang);
    updateDevUpdates();
  }

  // Helper function to get nested translation
  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
  }

  // Update placeholders
  function updatePlaceholders(lang) {
    if (wishlistEmail) {
      const placeholders = { en: 'Enter your email', zh: '输入您的邮箱' };
      wishlistEmail.placeholder = placeholders[lang];
    }
  }

  // Update stats from config.js
  function updateStats() {
    if (typeof gameStats === 'undefined') {
      console.warn('gameStats not found. Please create config.js file.');
      return;
    }
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

      if (gameStats.releaseDate && gameStats.alphaDate) {
        const releaseValues = document.querySelectorAll('.release-value');
        if (releaseValues[0]) releaseValues[0].textContent = gameStats.releaseDate;
        if (releaseValues[1]) releaseValues[1].textContent = gameStats.alphaDate;
      }

      console.log('✅ Stats updated successfully!');
    } catch (error) {
      console.error('Error updating stats:', error);
    }
  }

  // Update development updates from config.js
  function updateDevUpdates() {
    if (typeof gameStats === 'undefined' || !gameStats.updates) {
      console.warn('No updates found in config.js');
      return;
    }
    const updateCards = document.querySelectorAll('.update-card');
    gameStats.updates.forEach((update, index) => {
      if (updateCards[index]) {
        const dateEl = updateCards[index].querySelector('.update-date');
        const titleEl = updateCards[index].querySelector('h4');
        const descEl = updateCards[index].querySelector('p');
        if (dateEl) dateEl.textContent = update.date;
        if (titleEl) titleEl.textContent = currentLang === 'en' ? update.titleEN : update.titleZH;
        if (descEl) descEl.textContent = currentLang === 'en' ? update.descEN : update.descZH;
      }
    });
    console.log('✅ Development updates loaded from config.js');
  }

  // Video placeholder click
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
      const messages = {
        en: 'Video player would open here! Replace with your game trailer.',
        zh: '视频播放器将在此处打开！请替换为您的游戏预告片。'
      };
      alert(messages[currentLang]);
    });
  }

  // Wishlist form submission
  if (wishlistForm) {
    wishlistForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = wishlistEmail.value;
      const messages = {
        en: `Thank you! We'll notify ${email} when Hello World! launches!`,
        zh: `谢谢！我们会在 Hello World! 发布时通知 ${email}！`
      };
      alert(messages[currentLang]);
      this.reset();
    });
  }

  // ✅ Tier button clicks – NO alert, NO preventDefault
  const tierBtns = document.querySelectorAll('.tier-btn');
  tierBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // let the link go directly to Patreon in a new tab
      // nothing else here
    });
  });

  // One-time donation button – also direct link if you update HTML href
  const oneTimeBtn = document.querySelector('.btn-patreon');
  if (oneTimeBtn) {
    oneTimeBtn.addEventListener('click', function() {
      // direct navigation, no alert
    });
  }

  // Platform button click tracking (non-disabled)
  const platformBtns = document.querySelectorAll('.platform-btn:not(.disabled)');
  platformBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const platform = this.querySelector('.platform-name').textContent;
      const messages = {
        en: `${platform} version is still in development!`,
        zh: `${platform} 版本仍在开发中！`
      };
      alert(messages[currentLang]);
    });
  });

  // Active nav on first link
  if (navLinks.length > 0) {
    navLinks[0].classList.add('active');
  }

  // Keyboard shortcut for language toggle
  document.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === 'l') {
      const newLang = currentLang === 'en' ? 'zh' : 'en';
      const targetBtn = document.querySelector(`.lang-btn[data-lang="${newLang}"]`);
      if (targetBtn) targetBtn.click();
    }
  });

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    });
  });
});
