(function() {
    const Engine = window.Engine = {
        site:'cats',
        init: function() {
            console.log("Hey");
            let content = document.getElementById('content');
            let btn = document.createElement('button');
            btn.innerHTML = "turn on radio";
            btn.classList.add('button');
            btn.addEventListener('click', () => {
                console.log("clicked");
                let notifications = document.getElementById('notifications');
                let notification = document.createElement('div');
                notification.classList.add('notification');
                notification.innerHTML = "new thingama bobba";
                notifications.prepend(notification);
            })
            content.appendChild(btn);


                
        }
    };
    console.log(Engine);
})();

const startGame = function() {
    Engine.init();
}

startGame();