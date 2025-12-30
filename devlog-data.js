// devlog-data.js - Complete Development Log Archive
// Add new updates at the TOP of the array

const devLog = {
  // Complete list of all development updates
  updates: [
    {
      id: 'update-3',
      date: 'Dec 15, 2025',
      titleEN: 'Combat Design Progress',
      titleZH: '战斗设计进展',
      descEN: 'We\'ve finalized the main combat system designs and started working on mechanism! The combat will feature a unique blend of tactical shooting and strategic ability usage. Players will be able to switch between different combat stances, each offering unique advantages. We\'re also implementing a dynamic cover system that responds to the environment.',
      descZH: '我们已经完成了主要战斗系统设计，并开始制作机制！战斗将融合战术射击和策略技能使用的独特组合。玩家将能够在不同的战斗姿态之间切换，每种姿态都提供独特的优势。我们还在实施一个响应环境的动态掩体系统。',
      tags: ['combat', 'design', 'mechanics'],
      featured: true
    },
    {
      id: 'update-2',
      date: 'Jul 1, 2025',
      titleEN: 'World Building Phase',
      titleZH: '世界构建阶段',
      descEN: 'The first region of our open world is taking shape with stunning landscapes. We\'re creating a diverse ecosystem with multiple biomes, each with its own unique flora, fauna, and environmental challenges. The world will be fully explorable with hidden secrets, dynamic weather systems, and day-night cycles that affect gameplay.',
      descZH: '开放世界的第一个区域正在成形，拥有令人惊叹的景观。我们正在创建一个多样化的生态系统，包含多个生物群落，每个都有自己独特的植物、动物和环境挑战。世界将完全可探索，包含隐藏的秘密、动态天气系统和影响游戏玩法的昼夜循环。',
      tags: ['world', 'design', 'environment'],
      featured: false
    },
    {
      id: 'update-1',
      date: 'Jun 15, 2025',
      titleEN: 'Hello World!',
      titleZH: 'Hello World!',
      descEN: 'Idealize the game concept and start up prototyping. Today marks the official beginning of the Hello World! project. We\'re assembling a talented team of developers, artists, and designers who share our vision of creating an epic 3D RPG FPS experience. Our initial prototypes are focusing on core gameplay mechanics and art direction.',
      descZH: '构思游戏概念并开始原型制作。今天标志着 Hello World! 项目的正式开始。我们正在组建一支才华横溢的开发者、艺术家和设计师团队，他们分享我们创造史诗般3D RPG FPS体验的愿景。我们的初始原型专注于核心游戏机制和艺术方向。',
      tags: ['announcement', 'concept', 'prototype'],
      featured: false
    }
  ],
  
  // Statistics about the dev log
  get totalUpdates() {
    return this.updates.length;
  },
  
  get latestUpdate() {
    return this.updates[0];
  },
  
  // Get updates by tag
  getByTag(tag) {
    return this.updates.filter(update => 
      update.tags && update.tags.includes(tag)
    );
  },
  
  // Get featured updates
  getFeatured() {
    return this.updates.filter(update => update.featured);
  }
};

console.log('📚 Dev Log Loaded:', devLog.totalUpdates, 'updates');
console.log('📝 Latest:', devLog.latestUpdate.titleEN);