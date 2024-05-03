// import player from 'play-sound';

export const intro = async () => {
    let rawString = String.raw`
___________                                          ___________                         
\_   _____/  ______  ____  _____   ______    ____    \_   _____/_______   ____    _____  
 |    __)_  /  ___/_/ ___\ \__  \  \____ \ _/ __ \    |    __)  \_  __ \ /  _ \  /     \ 
 |        \ \___ \ \  \___  / __ \_|  |_> >\  ___/    |     \    |  | \/(  <_> )|  Y Y  \
/_______  //____  > \___  >(____  /|   __/  \___  >   \___  /    |__|    \____/ |__|_|  /
        \/      \/      \/      \/ |__|         \/        \/                          \/ 
        ___________.__                 __   __                                           
        \__    ___/|  |__    ____     /  |_|  \  __ __   _____  _____     ____     
          |    |   |  |  \ _/ __ \   |         ||  |  \ /     \ \__  \   /    \    
          |    |   |   Y  \\  ___/   |    _    ||  |  /|  Y Y  \ / __ \_|   |  \   
          |____|   |___|  / \___  >   \__| |  / |____/ |__|_|  /(____  /|___|  /   
                        \/      \/          \/               \/      \/      \/    `
   console.log(rawString)

    // const speccy = new Audio('./zxSpectrum.wav')
    // speccy.play()

    // const speccy = player();

    // speccy.play('./sounds/zxSpectrum.wav', (err) => {
    //   if (err) {
    //     console.error('Error playing audio:', err);
    //   }
    // });


    setTimeout(() => {

        console.log('\x1b[31m\x1b[1m                   CAN YOU FIGHT OFF THE AILMENTS AND FIND YOUR WAY OUT?\x1b[0m'
        ), 1000
    })
    let dots = '';
    const totalDots = 89;

    const intervalId = setInterval(() => {
        dots += '.';
        process.stdout.write(`\r${dots}`); // \r returns cursor to start of line

        if (dots.length === totalDots) {
            clearInterval(intervalId);
            process.stdout.write('\n'); //move to next line
        }
    }, 16);

    //INSERT USERNAME SELECTOR HERE

    const introLines = [
        '',
        '     \x1b[31mThe experiment went horribly wrong.\x1b[0m',
        'Playername was working on a groundbreaking super shrinky laser, designed to reduce ',
        'kidney stones to the size of a speck of dust. No more need for invasive surgery,',
        'just push a button and problem solved.',
        'It was not to be. Playername plugged in his new device and pushed the button...',
        '\x1b[33mZZZZzzzap!\x1b[0m \x1b[1m\x1b[90mEverything went black.\x1b[0m'
    ]

    setTimeout(() => {

        introLines.forEach((line, index) => {
            setTimeout(() => {
                console.log(line);
            }, index * 2300); // 3000 milliseconds delay between each line
        });

        console.log(` `);
    }, 4000)
}
