let p1, p2;
let p1Selection, p2Selection;
let p1Victory = 0,
  p2Victory = 0,
  p1Loss = 0,
  p2Loss = 0,
  tieGame = 0,
  userTurn = 0;

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

$("button").click(function() {
  database.ref("/playerChoice").set({
    playerChoice: p1Selection
  });
});

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

const firebaseConfig = {
  apiKey: "AIzaSyATH9rMlnexJ0eqfWI7Zttw0fyqj_fF6LQ",
  authDomain: "rps-online-46755.firebaseapp.com",
  databaseURL: "https://rps-online-46755.firebaseio.com",
  projectId: "rps-online-46755",
  storageBucket: "rps-online-46755.appspot.com",
  messagingSenderId: "509724336233",
  appId: "1:509724336233:web:c657f2feba716d54"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {
  // If they are connected..
  if (snap.val()) {
    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

connectionsRef.on("value", function(snap) {
  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  // $("#connected-viewers").text(snap.numChildren());
  let usersConnected = snap.numChildren();
  console.log(usersConnected);
  if (usersConnected > 2) {
    // connectionsRef.remove();
  }
});

// This callback allows the page to stay updated with the values in firebase node "clicks"
database.ref("/playerChoice").on(
  "value",
  function(snapshot) {
    // Print the local data to the console.
    console.log(snapshot.val());
    p1Selection = "";
    // Change the HTML to reflect the local value in firebase.
    playerChoice = snapshot.val().p1Selection;

    // If any errors are experienced, log them to console.
  },
  function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  }
);
