- rps logic

* create variables
  - p1, p2
  - p1Choice, p2Choice
  - available choices: rock, paper scissors
  - p1Victory, p2Victory
  - p1Loss, p2Loss
  - tieGame
* game logic
  - if p1Choice === p2Choice => tieGame
  - if p1Choice === rock \$\$ p2Choice === paper || p1Choice === paper && p2Choice === scissors || p1Choice === paper && p2Choice === scissors => p2Victory
  - if p1Choice === paper \$\$ p2Choice === rock || p1Choice === scissors && p2Choice === paper || p1Choice === scissors && p2Choice === paper => p1Victory
  - tracks wins, losses, and ties for each player, update dom with those values

- firebase logic
  - add firebase config with apikey etc
  - initalize firebase app
  - create reference to database (firebase.database().ref())
  - create variable for connected reference (.info/connected)
  - variable for connections reference (firebase.database().ref("connections")
  - variable for player names
  - variable for player choices
  - set inital values to firebase
  - update values based on player input
    - separate instance for each player?
    - database.set({playerName, playerChoice, playerWin, PlayerLoss, tie, isConnected})
  - create logic to only allow 2 players to connect
    - if connectionsRef === 2, refuse additional connections
    - if connectionsref < 2, wait for connectionsRef to === 2
  - onDisconnect: game over
