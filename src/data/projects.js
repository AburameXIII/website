const projects = [
  {
    id: 1,
    title: 'Big Bamboo',
    description:
      'A zen-like slot featuring a 5x6 grid with 50 paylines. Built with high volatility mechanics, featuring Mystery Bamboo Symbols, instant prizes, multipliers, and a Golden Bamboo feature with a max win potential of 50,000x.',
    image: 'https://www.pushgaming.com//uploads/Big%20Bamboo/Big-Bamboo_preview2.jpg',
    techStack: ['TypeScript', 'PixiJS', 'Spine'],
    githubUrl: null,
    liveUrl: 'https://www.pushgaming.com/games/big-bamboo.html',
  },
  {
    id: 2,
    title: 'Generous Jack',
    description:
      'A unique casino-themed slot featuring an inverted pyramid grid and a "win what you see" mechanic. Incorporates the innovative Push-Up mechanic to unlock additional rows and multiplier chips.',
    image: 'https://www.pushgaming.com//uploads/Generous%20Jack/Generous-Jack_preview3.jpg',
    techStack: ['TypeScript', 'PixiJS', 'Spine'],
    githubUrl: null,
    liveUrl: 'https://www.pushgaming.com/games/generous-jack.html',
  },
  {
    id: 3,
    title: 'Power Paws',
    description:
      'A vibrant, superhero-themed cluster-paying slot on a 7x7 grid. Developed with cascading mechanics and a Progression Meter that charges up to unlock Power Mysteries, Power Wilds, and the Power Nudge feature.',
    image: 'https://www.pushgaming.com/uploads/Power%20Paws/Power_Paws_Preview.jpg',
    techStack: ['TypeScript', 'PixiJS', 'Spine'],
    githubUrl: null,
    liveUrl: 'https://www.pushgaming.com/games/power-paws.html',
  },
  {
    id: 4,
    title: 'Big Bite Push Ways',
    description:
      'An Arctic-themed fishing adventure utilizing proprietary Push Ways mechanics. Features the Orca collector symbol to reel in instant prizes and a progression ladder during free spins to increase multipliers.',
    image: 'https://www.pushgaming.com/uploads/Big%20Bite%20Push%20Ways/Big_Bite_Push_Ways_Preview.jpg',
    techStack: ['TypeScript', 'PixiJS', 'Spine'],
    githubUrl: null,
    liveUrl: 'https://www.pushgaming.com/games/big-bite.html',
  },
  {
    id: 5,
    title: 'Cats of Olympuss',
    description:
      'A visually engaging online slot reimagining Ancient Greek mythology through a feline-themed lens. Features Stacked Wilds, instant coin prizes, and a Free Spins feature with expanded reels and mystery cards.',
    image: 'https://www.pushgaming.com/uploads/Cats%20of%20Olympuss/Cats_of_Olympuss_preview.jpg',
    techStack: ['TypeScript', 'PixiJS', 'Spine'],
    githubUrl: null,
    liveUrl: 'https://www.pushgaming.com/games/cats-olympuss.html',
  },
  {
    id: 6,
    title: 'Bamboo Ways',
    description:
      'An exciting addition to the Bamboo series featuring the dynamic Push Ways mechanic. Explore a serene forest with expanding reels, mystery symbols, and massive multiplier potential.',
    image: 'https://www.pushgaming.com//uploads/Bamboo%20Ways/Bamboo_Ways_Preview.jpg',
    techStack: ['TypeScript', 'PixiJS', 'Spine'],
    githubUrl: null,
    liveUrl: 'https://www.pushgaming.com/games/bamboo-ways.html',
  },
  {
    id: 7,
    title: 'Tarot Treasures',
    description:
      'A mystical slot game that delves into the arcane arts. Players uncover fortunes through dynamic tarot cards, featuring wild multipliers, a progressive bonus round, and rich, esoteric visuals.',
    image: 'https://www.pushgaming.com/uploads/Tarot%20Treasures/Tarot_Treasures_Preview.jpg',
    techStack: ['TypeScript', 'PixiJS', 'Spine'],
    githubUrl: null,
    liveUrl: 'https://www.pushgaming.com/games/tarot-treasures.html',
  },
  {
    id: 8,
    title: 'Vegas Vault',
    description:
      'A high-stakes casino heist adventure with a neon-lit aesthetic. Features cascading wins, vault-cracking bonus rounds, and sticky wilds that bring the thrill of Las Vegas straight to the reels.',
    image: 'https://www.pushgaming.com/uploads/Vegas%20Vault/Vegas_Vault_Preview.jpg',
    techStack: ['TypeScript', 'PixiJS', 'Spine'],
    githubUrl: null,
    liveUrl: 'https://www.pushgaming.com/games/vegas-vault.html',
  },
  {
    id: 9,
    title: 'ReLive - Global Game Jam 2020',
    description:
      'A game about lost love, broken spirit and sad memories. The character dives into his inner self to face memories and recover his will to live. Built for Global Game Jam 2020.',
    image: 'https://img.youtube.com/vi/DEUlttg8dEs/hqdefault.jpg',
    techStack: ['Unity', 'C#'],
    githubUrl: null,
    liveUrl: 'https://www.youtube.com/watch?v=DEUlttg8dEs',
  },
  {
    id: 10,
    title: 'Procedural Dungeon Generation',
    description:
      'A Procedural Generation Algorithm tunable and mixing different techniques. Built from scratch with C++ and integrated into Unreal Engine 4.',
    image: 'https://img.youtube.com/vi/9zbTFH5IEdc/hqdefault.jpg',
    techStack: ['C++', 'Unreal Engine 4'],
    githubUrl: 'https://github.com/AburameXIII/ProceduralDungeon',
    liveUrl: 'https://www.youtube.com/watch?v=9zbTFH5IEdc',
  },
  {
    id: 11,
    title: 'RPG Tetris',
    description:
      'A unique twist on Tetris featuring RPG elements. Match blocks to attack enemies, gain experience, and level up your character. Project made in Unity.',
    image: 'https://img.youtube.com/vi/UCZ5nXtR8HE/hqdefault.jpg',
    techStack: ['Unity', 'C#'],
    githubUrl: 'https://github.com/AburameXIII/RPGTetris',
    liveUrl: 'https://www.youtube.com/watch?v=UCZ5nXtR8HE',
  },
  {
    id: 12,
    title: 'Fitness Game Prototype',
    description:
      'A prototype for a fitness game focusing on integrating physical exercises with gameplay mechanics. Built to explore innovative ways to make fitness interactive.',
    image: 'https://img.youtube.com/vi/hdNYL75naoY/hqdefault.jpg',
    techStack: ['Unity', 'C#'],
    githubUrl: 'https://github.com/AburameXIII/FinalProject',
    liveUrl: 'https://www.youtube.com/watch?v=hdNYL75naoY',
  },
  {
    id: 13,
    title: 'Tower Defense',
    description:
      'A tower defense game featuring tower experience, upgrades, tooltips, and different types of attacks. Built using Unreal Engine 4.',
    image: 'https://img.youtube.com/vi/zmHchrsz3T8/hqdefault.jpg',
    techStack: ['Unreal Engine 4', 'Blueprints'],
    githubUrl: 'https://github.com/AburameXIII/TowerDefense',
    liveUrl: 'https://www.youtube.com/watch?v=zmHchrsz3T8',
  },
  {
    id: 14,
    title: 'Inventory System',
    description:
      'A fully functional and scalable C++ inventory system demo built for Unreal Engine 4.',
    image: 'https://img.youtube.com/vi/P9tiI65oBNE/hqdefault.jpg',
    techStack: ['Unreal Engine 4', 'C++'],
    githubUrl: 'https://github.com/AburameXIII/InventorySystemProject',
    liveUrl: 'https://www.youtube.com/watch?v=P9tiI65oBNE',
  }
];

export default projects;
