let p1, p2;
let p1Selection, p2Selection;
let p1Victory = 0,
  p2Victory = 0,
  p1Loss = 0,
  p2Loss = 0,
  tieGame = 0;

// - game logic
function rps(p1Choice, p2Choice) {
  if (p1Choice === p2Choice) {
    tieGame++;
    console.log("tie game");
  } else if (
    (p1Choice === "rock" && p2Choice === "scissors") ||
    (p1Choice === "scissors" && p2Choice === "paper") ||
    (p1Choice === "paper" && p2Choice === "rock")
  ) {
    p1Victory++;
    console.log("player 1 wins");
  } else {
    p2Victory++;
    console.log("player 2 wins");
  }
}

function runGame() {
  if (p1 && p2) {
    rps(p1Selection, p2Selection);
    (p1 = false), (p2 = false);
  }
}

$("#p1-rock").click(function(e) {
  p1Selection = $(this).text();
  console.log(p1Selection);
  p1 = true;
  runGame();
});
$("#p1-paper").click(function(e) {
  p1Selection = $(this).text();
  console.log(p1Selection);
  p1 = true;
  runGame();
});
$("#p1-scissors").click(function(e) {
  p1Selection = $(this).text();
  console.log(p1Selection);
  p1 = true;
  runGame();
});
$("#p2-rock").click(function(e) {
  p2Selection = $(this).text();
  console.log(p2Selection);
  p2 = true;
  runGame();
});
$("#p2-paper").click(function(e) {
  p2Selection = $(this).text();
  console.log(p2Selection);
  p2 = true;
  runGame();
});
$("#p2-scissors").click(function(e) {
  p2Selection = $(this).text();
  console.log(p2Selection);
  p2 = true;
  runGame();
});

//     - tracks wins, losses, and ties for each player, update dom with those values
