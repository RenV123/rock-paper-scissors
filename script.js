(() => {
  var hands = [
    { id: 'scissors', url: './css/images/scissors.svg' },
    { id: 'rock', url: './css/images/rock.svg' },
    { id: 'paper', url: './css/images/paper.svg' },
  ];

  var userPickedHand = '';
  var systemPickedHand = '';
  const systemPickRandomHand = () => {
    //Make sure the new random pick is always different from the last one.
    var oldSystemPickedHand = systemPickedHand;
    do {
      systemPickedHand = hands[Math.floor(Math.random() * 3)].id;
    } while (oldSystemPickedHand === systemPickedHand);
  };

  document.getElementById('run').addEventListener('click', () => {
    systemPickRandomHand();

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

  const resetButtons = () => {
    Array.from(document.querySelectorAll('button.hand')).forEach(($btn) => {
      $btn.style.background = 'white';
    });
  };

  const setActivehandButton = (activeButton) => {
    //First set all button backgrounds back to white
    resetButtons();
    activeButton.style.background = '#007bff';
  };

  Array.from(document.querySelectorAll('button.hand')).forEach(($btn) =>
    $btn.addEventListener(
      'click',
      () => {
        userPickedHand = $btn.id;
        setActivehandButton($btn);
      },
      false
    )
  );
})();
