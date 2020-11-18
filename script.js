(() => {
  var hands = [
    { id: 'scissors', url: './css/images/scissors.svg' },
    { id: 'rock', url: './css/images/rock.svg' },
    { id: 'paper', url: './css/images/paper.svg' },
  ];

  var userPickedHand = '';
  var systemPickedHand = '';
  const drawRandomHand = () => {
    return hands[Math.floor(Math.random() * 3)].id;
  };

  document.getElementById('run').addEventListener('click', () => {
    systemPickedHand = drawRandomHand();

    var hand = hands.find((hand) => {
      return hand.id === systemPickedHand;
    });
    document.getElementById('system-drawn-hand').src = hand.url;
    var gameStatus = document.getElementById('game-status');

    switch (userPickedHand) {
      case 'scissors':
        switch (systemPickedHand) {
          case 'scissors':
            gameStatus.innerHTML = "It's a draw.";
            break;
          case 'rock':
            gameStatus.innerHTML = 'You lose.';
            break;
          case 'paper':
            gameStatus.innerHTML = 'You won.';
            break;
        }
        break;
      case 'rock':
        switch (systemPickedHand) {
          case 'scissors':
            gameStatus.innerHTML = 'You won.';
            break;
          case 'rock':
            gameStatus.innerHTML = "It's a draw.";
            break;
          case 'paper':
            gameStatus.innerHTML = 'You lose.';
            break;
        }
        break;
      case 'paper':
        switch (systemPickedHand) {
          case 'scissors':
            gameStatus.innerHTML = 'You lose.';
            break;
          case 'rock':
            gameStatus.innerHTML = 'You won.';
            break;
          case 'paper':
            gameStatus.innerHTML = "It's a draw.";
            break;
        }
        break;
      default:
        console.log('Invalid operation.');
    }
  });

  Array.from(document.querySelectorAll('button')).forEach(($btn) =>
    $btn.addEventListener(
      'click',
      () => {
        userPickedHand = $btn.id;
      },
      false
    )
  );
})();
