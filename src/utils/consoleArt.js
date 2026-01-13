// Retro console welcome message and easter eggs

export const initConsoleArt = () => {
  // ASCII Art Welcome
  const ascii = `
 ╔═══════════════════════════════════════════════════════════╗
 ║                                                           ║
 ║   ███████╗██╗██╗  ██╗   ██╗██╗ ██████╗                  ║
 ║   ██╔════╝██║██║  ██║   ██║██║██╔═══██╗                 ║
 ║   ███████╗██║██║  ██║   ██║██║██║   ██║                 ║
 ║   ╚════██║██║██║   ╚██╗ ██╔╝██║██║   ██║                 ║
 ║   ███████║██║███████╗╚████╔╝ ██║╚██████╔╝                ║
 ║   ╚══════╝╚═╝╚══════╝ ╚═══╝  ╚═╝ ╚═════╝                 ║
 ║                                                           ║
 ║          PhD in Blockchain & DLT                          ║
 ║          Retro Portfolio v1.0                             ║
 ║                                                           ║
 ╚═══════════════════════════════════════════════════════════╝
`;

  console.log(
    '%c' + ascii,
    'color: #fc0fc0; font-family: monospace; font-weight: bold;'
  );

  console.log(
    '%c🎮 WELCOME TO THE RETRO ZONE! 🎮',
    'color: #00e5e8; font-size: 16px; font-weight: bold; text-shadow: 2px 2px 0px rgba(0,0,0,0.5);'
  );

  console.log(
    '%cTry these secret commands:',
    'color: #fcfc00; font-size: 14px; font-weight: bold;'
  );

  console.log(
    '%c• help()',
    'color: #fc0fc0; font-size: 12px;'
  );
  console.log(
    '%c• konami()',
    'color: #00e5e8; font-size: 12px;'
  );
  console.log(
    '%c• theme()',
    'color: #fcfc00; font-size: 12px;'
  );
  console.log(
    '%c• about()',
    'color: #00fc00; font-size: 12px;'
  );
  console.log(
    '%c• snake()',
    'color: #fc0fc0; font-size: 12px;'
  );

  console.log(
    '%c\n💡 Hint: Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A',
    'color: #fff; font-size: 11px; font-style: italic;'
  );
};

// Console commands
export const initConsoleCommands = () => {
  window.help = () => {
    console.log('%c=== RETRO PORTFOLIO COMMANDS ===', 'color: #fc0fc0; font-size: 14px; font-weight: bold;');
    console.log('%chelp()', 'color: #00e5e8;', '- Show this help message');
    console.log('%cabout()', 'color: #00e5e8;', '- About Silvio Meneguzzo');
    console.log('%ckonami()', 'color: #00e5e8;', '- Activate Konami Code');
    console.log('%ctheme()', 'color: #00e5e8;', '- Show available themes');
    console.log('%csnake()', 'color: #00e5e8;', '- Play Snake game');
    console.log('%cnewsletterManager.getSubscribers()', 'color: #00e5e8;', '- View newsletter subscribers');
    console.log('%cnewsletterManager.exportSubscribers()', 'color: #00e5e8;', '- Export subscribers as CSV');
  };

  window.about = () => {
    console.log('%cSilvio Meneguzzo', 'color: #fc0fc0; font-size: 16px; font-weight: bold;');
    console.log('PhD Candidate in Blockchain & DLT');
    console.log('University of Turin • LINKS Foundation');
    console.log('\n📧 Email: meneguzzosilvio@gmail.com');
    console.log('🐙 GitHub: github.com/smeneguz');
    console.log('💼 LinkedIn: linkedin.com/in/silvio-arras-meneguzzo');
    console.log('🎓 Scholar: scholar.google.com/citations?user=cFT2URcAAAAJ');
    console.log('\n🔬 Research: DAOs, Energy Marketplaces, ZK Proofs');
    console.log('📝 Publications: 9 papers (IEEE, COMPSAC, BRAINS)');
  };

  window.konami = () => {
    console.log('%c🎮 KONAMI CODE INFO', 'color: #fc0fc0; font-size: 14px; font-weight: bold;');
    console.log('Press the following keys in sequence:');
    console.log('%c↑ ↑ ↓ ↓ ← → ← → B A', 'color: #00e5e8; font-size: 16px;');
    console.log('\n✨ Unlocks a special surprise!');
  };

  window.theme = () => {
    console.log('%c🎨 AVAILABLE THEMES', 'color: #fc0fc0; font-size: 14px; font-weight: bold;');
    console.log('1. %cCyberpunk Pink%c (default) - Hot pink & cyan vibes', 'color: #fc0fc0;', 'color: inherit;');
    console.log('2. %cGame Boy Classic%c - Nostalgic green monochrome', 'color: #0f380f;', 'color: inherit;');
    console.log('3. %cOutrun Sunset%c - Purple & orange aesthetic', 'color: #f72585;', 'color: inherit;');
    console.log('4. %cMatrix Green%c - Terminal hacker style', 'color: #00ff41;', 'color: inherit;');
    console.log('5. %cBlockchain Blue%c - Professional blue & gold', 'color: #2a9d8f;', 'color: inherit;');
    console.log('\n💡 Switch themes using the button in the header!');
  };

  window.snake = () => {
    console.log('%c🐍 SNAKE GAME', 'color: #fc0fc0; font-size: 14px; font-weight: bold;');
    console.log('Click the %c🎮 gamepad icon%c in the header to play!', 'color: #00e5e8;', 'color: inherit;');
    console.log('\n🎮 Controls:');
    console.log('  Arrow Keys - Move');
    console.log('  SPACE      - Pause/Resume');
    console.log('  ESC        - Close game');
  };

  console.log(
    '%c💡 Type help() to see all available commands',
    'color: #fcfc00; font-size: 12px; background: rgba(0,0,0,0.8); padding: 4px 8px; border-radius: 4px;'
  );
};
