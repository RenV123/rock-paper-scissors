(() => {
  var hands = [
    { id: 'scissors', url: './css/images/scissors.svg' },
    { id: 'rock', url: './css/images/rock.svg' },
    { id: 'paper', url: './css/images/paper.svg' },
  ];

  var userHand = '';
  var systemHand = '';
  const systemPickRandomHand = () => {
    //Make sure the new random pick is always different from the last one.
    var oldSystemHand = systemHand;
    do {
      systemHand = hands[Math.floor(Math.random() * 3)].id;
    } while (oldSystemHand === systemHand);
  };

  document.getElementById('run').addEventListener('click', () => {
    systemPickRandomHand();

    var hand = hands.find((hand) => {
      return hand.id === systemHand;
    });
    document.getElementById('system-drawn-hand').src = hand.url;
    var gameStatus = document.getElementById('game-status');

    calculateGameOutcome(userHand, systemHand, gameStatus);
  });

  const calculateGameOutcome = (userHand, systemHand, gameStatus) => {
    switch (userHand) {
      case 'scissors':
        switch (systemHand) {
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
        switch (systemHand) {
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
        switch (systemHand) {
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
  };

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
        userHand = $btn.id;
        setActivehandButton($btn);
      },
      false
    )
  );
})();
