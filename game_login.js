
function addUser() {
var Ninja = document.getElementById("player1_name_input").value;
var hi = document.getElementById("player2_name_input").value;
  localStorage.setItem("player1", Ninja);
  localStorage.setItem("player2", hi);
  window.location = "game_page.html";
}