var player1 = prompt("Enter Player1 Name");
document.getElementById("player1").innerText = player1;

var player2 = prompt("Enter Player2 Name");
document.getElementById("player2").innerText = player2;

function dice() {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var value1 = "." + "/" + "assets" + "/" + "dice" + dice1 + ".png";
  document.getElementById("dicesrc1").setAttribute("src", value1);

  var dice2 = Math.floor(Math.random() * 6) + 1;
  var value2 = "." + "/" + "assets" + "/" + "dice" + dice2 + ".png";
  document.getElementById("dicesrc2").setAttribute("src", value2);
  if (dice1 > dice2) {
    document.getElementById("primary-heading").innerText = player1 + " Won!";
  } else if (dice1 < dice2) {
    document.getElementById("primary-heading").innerText = player2 + " Won!";
  } else {
    document.getElementById("primary-heading").innerText = "Its a Draw!";
  }
}
