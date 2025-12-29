// config.js - Update this file whenever your stats change
// Last updated: 2025-12-29

const gameStats = {
  // ========================================
  // UPDATE THESE NUMBERS WITH YOUR REAL DATA
  // ========================================
  
  followers: 0,          // Your actual social media followers (Twitter/Discord/etc)
  backers: 0,            // Your actual Patreon/crowdfunding backers
  raised: 0,             // Amount raised so far (in dollars, no $ sign)
  goal: 10000,           // Your funding goal (in dollars, no $ sign)
  
  // ========================================
  // AUTO-CALCULATED (Don't change this)
  // ========================================
  get fundedPercent() {
    if (this.goal === 0) return 0;
    return ((this.raised / this.goal) * 100).toFixed(1);
  },
  
  // ========================================
  // RELEASE DATES (Update as needed)
  // ========================================
  alphaDate: 'Q1 2025',      // When alpha testing begins
  releaseDate: 'Q3 2025',    // Expected full release
  
  // ========================================
  // METADATA (Optional)
  // ========================================
  lastUpdated: '2024-12-15',
  version: '1.0.0'
};

// ========================================
// LOGGING (Keep this for debugging)
// ========================================
console.log('📊 Game Stats Loaded Successfully!');
console.log('👥 Followers:', gameStats.followers);
console.log('💰 Backers:', gameStats.backers);
console.log('💵 Raised: $' + gameStats.raised.toLocaleString());
console.log('🎯 Goal: $' + gameStats.goal.toLocaleString());
console.log('📊 Funded:', gameStats.fundedPercent + '%');
console.log('🗓️ Last Updated:', gameStats.lastUpdated);