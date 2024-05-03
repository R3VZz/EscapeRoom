export const intro = async (player) => {
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


    console.log('\x1b[31m\x1b[1m                   CAN YOU FIGHT OFF THE AILMENTS AND FIND YOUR WAY OUT?\x1b[0m');

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

    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('     \x1b[31mThe experiment went horribly wrong.\x1b[0m')
    console.log(`${player.name} was working on a groundbreaking super shrinky laser, designed to reduce `)
    console.log('kidney stones to the size of a speck of dust. No more need for invasive surgery,')
    console.log('just push a button and problem solved.')
    console.log(`It was not to be. ${player.name} plugged in his new device and pushed the button...`)
    console.log('\x1b[33mZZZZzzzap!\x1b[0m \x1b[1m\x1b[90mEverything went black.\x1b[0m \n')
}
