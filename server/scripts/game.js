import Engine from './engine.js';

(function() {
    console.log("Game start, instantiating engine");
    const engine = new Engine({});

    const startGame = function() {
        engine.init();
    }

    startGame();

})();



/**
 * On window load, 
 * 1.) Check if there's any saved gameState in localStorage
 * 2.) If yes, set localStorage.gameState to global var State
 * 3.) If no, set up initial game localStorage.gameState
 *  
 */