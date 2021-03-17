import Display from "./display.js";

export default class Engine {
    constructor(state) {
        this.state = state;
        this.Display = new Display();
    }
    init() {
        console.log(`Start init(), current state:`, this.state);
        
        this.loadGame();
        // this.Display.show('<p>CATTTTTTS</p>')
        /**
         * Gotta set up existing game with defined state
         * 1. Display
         * 2. Location
         * 3. Actions
         * 4. Inventory
         */
        this.state.locations = {
            "rookery": {
                "open": true, //if true, enable click
                "active": true, //rookery, default true, only one location can be active at a time (UI)
                "actions": []
            },
            "station": {
                "open": false, //if false, disable from click
                "active": false,
                "actions": []
            }
        };
        //based on this.state.locations;
        let locations = Object.keys(this.state.locations);
        locations.forEach((location, index) => {
            let menuEl = document.querySelector('#menu');
            let locationEl = document.createElement('span');
            locationEl.classList.add('location');
            locationEl.id = location;
            locationEl.addEventListener("click", this.travelTo.bind(this));
            locationEl.textContent = location;
            // If location is open/available, 
            if(this.state.locations[location].open) {
                locationEl.classList.add('active');
            }
            menuEl.append(locationEl);
        });
    }
    travelTo(e) {
        let currentLocationEl = document.querySelector("#menu .active");
        let nextLocationEl = document.querySelector(`#${e.target.id}`);
        currentLocationEl.classList.remove('active');
        nextLocationEl.classList.add('active');
        console.log("currentLocation:", currentLocationEl);
        console.log("nextLocation:", nextLocationEl);
        //reset actions menu with new currentlocation
    }
    loadGame() {
        console.log(`Start loadGame() with gameState:`, this.state);
        /** 
         * Try to find previous saved gameState, aka localStorage.gameState, 
         * Else, start a new game with new gameState
         */
        try { 
            let savedState = JSON.parse(localStorage.gameState);
            console.log(`Found existing state!`, savedState);
            if(Object.keys(savedState).length !== 0 && savedState.constructor === Object) {
                this.state = savedState;
                console.log("Gonna load existing game.");
            }
        } catch(e) {
            /**If new game, aka localStorage.gameState === null, 
             * load new game state by saveGame, which creates a localStorage.gameState
             */
            console.log("Couldn't find gameState. New game since state is empty. Setting up gameState");
            this.saveGame();
        }

    }
    saveGame() {
        console.log(`Called saveGame()`);
        //Basically sets this.state to localStorage.gameState; if no gameState exists, makes one.
        localStorage.gameState = JSON.stringify(this.state);
        console.log("Here's the newly saved this.state", this.state);
    }
    log(msg) {
        console.log('Log --> ', msg);
    }

};
// const Engine = window.Engine = {
//     site:'cats',
//     options: {
//         state: null,
//         checking: true,
//     },
//     init: function(options) {
//         console.log("Checking engine options on init", options);
//         this.options = Object.assign(this.options, options);
//         if(this.options.state != null) {
//             //if not a new game, load the saveState
//             window.State = this.options.state;
//             console.log("window.state", window.State);
//         } else {
//             //if starting a new game
//             console.log("window.state is null", window.State);
//             console.log("engine options", options, this.options);
//             Engine.loadGame();
//             // this.setActions();
//         }
//         console.log("Init StateManager");
//         StateManager.init();
//     },
//     updateNotifications: function() {

//     },
//     setMenu: function() {
//         if(localStorage.gameState) {
//             console.log("set up menu with gamestate");
//             let State = JSON.parse(localStorage.gameState);
//             console.log("State", State);

//         }
//     },
//     addMenuItem: function() {
//         let menu = document.querySelector('#menu');
//         let location = document.createElement('span');
//         location.textContent = "Rookery";
//         location.classList.add('location', 'active');
//         menu.append(location);
//     },
//     setActions: function() {
//         //on load, default to rookery location
//         //based on location, populate content div with the location's available actions
//         //checkLocation
//         this.checkLocation();
//         let content = document.querySelector('#content');
//         let btn = document.createElement('button');
//         btn.innerHTML = "turn on radio";
//         btn.classList.add('button');
//         btn.addEventListener('click', () => {
//             console.log("clicked");
//             let notifications = document.querySelector('#notifications');
//             let notification = document.createElement('div');
//             notification.setAttribute('class', 'notification');
//             notification.textContent = "new thingama bobba";
//             notifications.prepend(notification);
//             let radio = true;
//             localStorage.gameState = JSON.stringify({"radio": true});
//             console.log("localstorage", localStorage)
//         }, false);
//         content.append(btn);
//     }, 
//     checkLocation: function() {
//         let currentLocation = this.options.state.currentLocation;
//         console.log("currentLocation", currentLocation);
//     }
// };
// console.log("Engine", Engine);