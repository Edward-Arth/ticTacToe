const gameBoard = (() => {
    const squares = document.getElementsByClassName('boardSquares');
    const board = document.getElementById('board')
    let gameBoardy = ['','','','','','','','',''];
    let turnCounter = 0;
    let currentToken = [''];

    const Player = (token, turns) => {
        const playing = () => {
            if (turns.includes(turnCounter)) {
                currentToken.splice(0, 1, token)
            }
        };
        return {playing, token}
    };

    const player1 = Player('X', [0,2,4,6,8]);
    const player2 = Player('O', [1,3,5,7,9]);

    function checkWin () {
        let win = [
            squares.item(0).textContent + squares.item(1).textContent + squares.item(2).textContent, 
            squares.item(3).textContent + squares.item(4).textContent + squares.item(5).textContent, 
            squares.item(6).textContent + squares.item(7).textContent + squares.item(8).textContent, 
            squares.item(0).textContent + squares.item(3).textContent + squares.item(6).textContent, 
            squares.item(1).textContent + squares.item(4).textContent + squares.item(7).textContent, 
            squares.item(2).textContent + squares.item(5).textContent + squares.item(8).textContent,  
            squares.item(0).textContent + squares.item(4).textContent + squares.item(8).textContent,
            squares.item(2).textContent + squares.item(4).textContent + squares.item(6).textContent,
        ];
        if (win.includes('XXX')) {
            alert('Player 1 wins!');
            board.style.pointerEvents = 'none';
        }
        else if (win.includes('OOO')) {
            alert('Player 2 wins!');
            board.style.pointerEvents = 'none';
        }
        else if (turnCounter === 8) {
            alert('Tie game!');
            board.style.pointerEvents = 'none';
        };
    };

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', () => {
            if (squares.item(i).textContent.length === 0) {
                player1.playing();
                player2.playing();
                gameBoardy.splice(i, 1, currentToken);
                squares.item(i).textContent = gameBoardy[i];
                checkWin ();
                turnCounter += 1;
            };
        });
    };

    const restart = document.getElementById("restart");
    restart.addEventListener('click', () => {
        turnCounter = 0;
        let currentToken = ['X'];
        let gameBoardy = ['','','','','','','','',''];
        for (let i = 0; i < squares.length; i++) {
            squares.item(i).textContent = gameBoardy[i];
        };
        player1.playing();
        player2.playing();
        board.style.pointerEvents = 'all';
    });
})();