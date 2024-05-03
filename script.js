import { intro } from './functions/intro.js'
import { main } from './functions/functions.js'

const startGame = async () => {
    await intro();
    main();
}

startGame();
