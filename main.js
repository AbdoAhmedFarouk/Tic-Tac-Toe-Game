let dashboard = document.querySelector(".dashboard");
let turn = "X";
let squares = [];
let duration = 4000;

function game(id) {
  let element = document.getElementById(id);

  if (turn === "X" && element.innerHTML === "") {
    element.innerHTML = "X";
    turn = "O";
    dashboard.innerHTML = "O";
  } else if (turn === "O" && element.innerHTML === "") {
    element.innerHTML = "O";
    turn = "X";
    dashboard.innerHTML = "X";
  }
  comparing();
}
function comparing() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("box" + i).innerHTML;
  }
  if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
    winner(1, 2, 3);
  } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
    winner(4, 5, 6);
  } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
    winner(7, 8, 9);
  } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != '') {
    winner(1, 4, 7);
  } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != '') {
    winner(2, 5, 8);
  } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
    winner(3, 6, 9);
  } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
    winner(1, 5, 9);
  } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
    winner(3, 5, 7);
  } 
}
function winner(num1, num2, num3) {
  dashboard.innerHTML = `${squares[num1]} winner`;
  document.getElementById('box' + num1).style.backgroundColor = '#000';
  document.getElementById('box' + num2).style.backgroundColor = '#000';
  document.getElementById('box' + num3).style.backgroundColor = '#000';
  setInterval(() => dashboard.innerHTML += '.', 1000);
  setTimeout(() => location.reload(), duration);
}