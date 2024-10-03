$(document).ready(function () {
    let score = 0;

    $('#player').draggable({
        containment: '#game-area',
        drag: function () {
            checkCollision();
        }
    });

    $('#reset-button').click(function () {
        score = 0;
        $('#score').text(score);
        placeCoinRandomly(); 
    });

    placeCoinRandomly();

    function placeCoinRandomly() {
        let randomTop = Math.random() * 380;
        let randomLeft = Math.random() * 380;
        $('#coin').css({ top: randomTop + 'px', left: randomLeft + 'px' });
    }

    function checkCollision() {
        let player = $('#player');
        let coin = $('#coin');
        let playerPos = player.position();
        let coinPos = coin.position();

        if (playerPos.left < coinPos.left + 20 &&
            playerPos.left + 100 > coinPos.left &&
            playerPos.top < coinPos.top + 20 &&
            playerPos.top + 150 > coinPos.top) {
            score++;
            $('#score').text(score);

            placeCoinRandomly();
        }
    }
});
