const board = document.getElementsByClassName('board')[0];
board.textContent = "Phía trước là đường!";

document.getElementById("button").onclick = function(){
    var userName = document.getElementById("textbox").value;
    board.style.backgroundColor = "#fff";
    board.textContent = userName + " đã từng qua đây.";

}