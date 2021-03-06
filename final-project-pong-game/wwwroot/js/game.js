Constant.MAP_HEIGHT = window.innerHeight;
Constant.MAP_WIDTH = window.innerWidth / 1.8;

let playerIndex = 0;
let groupID = decodeURIComponent(window.location.search).substring(1).split('&')[0];
let theme = decodeURIComponent(window.location.search).substring(1).split('&')[1];
console.log(groupID, theme);
let gameEnd = false;
let inGame = false;
let direction = 0;
let config = {
    type: Phaser.AUTO,
    width: Constant.MAP_WIDTH,
    height: Constant.MAP_HEIGHT,
    parent: 'container',
    scene: [WaitingScene, GameScene]
};

var xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        if (this.status == 400)
            window.open("/test", "_self");
        ready();
    }
});
xhr.open("GET", "api/room/" + groupID + "/join");
xhr.send();

let game = new Phaser.Game(config);

function ready() {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/gameHub")
        .build();

    connection.on("Test", function (msg) {
        console.log(msg);
    });

    connection.start().then(function () {
        console.log("connected");
        connection.invoke("AddToGroup", groupID);
    });

    async function start() {
        try {
            await connection.start();
            console.log("connected");
        } catch (err) {
            console.log(err);
            setTimeout(() => start(), 5000);
        }
    };

    connection.onclose(async () => {
        await start();
    });

    connection.on("StartGame", () => {
        inGame = true;
        game.scene.run("GameScene");
    });

    connection.on("ReceiveWinner", (winnerIndex) => {
        gameEnd = true;
        inGame = false;
        if (winnerIndex == playerIndex)
            game.scene.scenes[1].endGame(1);
        else
            game.scene.scenes[1].endGame(2);
    });

    connection.on("StartGame", () => {
        game.scene.run('GameScene');
    });

    connection.on("ReceiveIndex", (index) => {
        playerIndex = index;
        console.log(index);
    });

    connection.on("ReceiveData", (pong_game) => {
        if (playerIndex == 2) {
            pong_game.pong.x = Constant.ORIGINAL_WIDTH - pong_game.pong.x;
            pong_game.pong.y = Constant.ORIGINAL_HEIGHT - pong_game.pong.y;
            pong_game.paddle[1].x = Constant.ORIGINAL_WIDTH - pong_game.paddle[1].x;
            pong_game.paddle[1].y = Constant.ORIGINAL_HEIGHT - pong_game.paddle[1].y;
            pong_game.paddle[2].x = Constant.ORIGINAL_WIDTH - pong_game.paddle[2].x;
            pong_game.paddle[2].y = Constant.ORIGINAL_HEIGHT - pong_game.paddle[2].y;
        }

        game.scene.scenes[1].updateLocation(pong_game);
    });

    let leftPressed = false;
    let rightPressed = false;
    document.addEventListener('keydown', function (event) {
        if ((event.keyCode == 37 || event.keyCode == 65) && !leftPressed && inGame) {
            console.log('Left was pressed');
            leftPressed = true;
            direction += (playerIndex == 1) ? -1 : 1;
        }
        if ((event.keyCode == 39 || event.keyCode == 68) && !rightPressed && inGame) {
            console.log('Right was pressed');
            rightPressed = true;
            direction += (playerIndex == 1) ? 1 : -1;
        }
        if (event.keyCode == 32 && gameEnd) { //space pressed
            game.scene.stop('GameScene');
            game.scene.run('WaitingScene');
            connection.invoke("restartGame", groupID);
            gameEnd = false;
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.keyCode == 37 || event.keyCode == 65) { //left arrow or a
            console.log('Left was released');
            leftPressed = false;
            direction -= (playerIndex == 1) ? -1 : 1;
        }
        if (event.keyCode == 39 || event.keyCode == 68) { //right arrow or d invoke movePaddle(playerindex, direction(1 or -1));
            console.log('Right was released');
            rightPressed = false;
            direction -= (playerIndex == 1) ? 1 : -1;
        }
    });

    setInterval(function () {
        if (!inGame) return;
        connection.invoke("movePaddle", playerIndex, direction, groupID);
    }, 20);
}
