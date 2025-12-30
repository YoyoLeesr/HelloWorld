// config.js - Update this file whenever your stats change
// Last updated: 2025-12-30


const gameStats = {
  // ========================================
  // GAME STATISTICS
  // ========================================
  
  followers: 0,          // Your actual social media followers
  backers: 0,            // Your actual Patreon/crowdfunding backers
  raised: 0,             // Amount raised so far (in dollars)
  goal: 10000,           // Your funding goal (in dollars)
  
  // Auto-calculated percentage
  get fundedPercent() {
    if (this.goal === 0) return 0;
    return ((this.raised / this.goal) * 100).toFixed(1);
  },
  
  // ========================================
  // RELEASE DATES
  // ========================================

  alphaDate: 'Q1 2027',
  releaseDate: 'Q3 2027',

  
  // ========================================
  // LATEST 3 UPDATES (for homepage)
  // When adding new update: Add at top, remove oldest
  // ========================================

  updates: [
    {
      date: 'Dec 15, 2025',
      titleEN: 'Combat Design Progress',
      titleZH: '战斗设计进展',
      descEN: 'We\'ve finalized the main combat system designs and started working on mechanism!',
      descZH: '我们已经完成了主要战斗系统设计，并开始制作机制！'
    },
    {
      date: 'Jul 1, 2025',
      titleEN: 'World Building Phase',
      titleZH: '世界构建阶段',
      descEN: 'The first region of our open world is taking shape with stunning landscapes.',
      descZH: '开放世界的第一个区域正在成形，拥有令人惊叹的景观。'
    },
    {
      date: 'Jun 15, 2025',
      titleEN: 'Hello World!',
      titleZH: 'Hello World!',
      descEN: 'Idealize the game concept and start up prototyping.',
      descZH: '构思游戏概念并开始原型制作。'
    }
  ],
  
  // ========================================
  // METADATA
  // ========================================

  lastUpdated: '2025-12-30',
  version: '1.0.0'
};

// Logging
console.log('📊 Game Stats Loaded Successfully!');
console.log('👥 Followers:', gameStats.followers);
console.log('💰 Backers:', gameStats.backers);
console.log('💵 Raised: $' + gameStats.raised.toLocaleString());
console.log('🎯 Goal: $' + gameStats.goal.toLocaleString());
console.log('📊 Funded:', gameStats.fundedPercent + '%');
console.log('📝 Latest Updates:', gameStats.updates.length);