var player1_name = localStorage.getItem("player_name1");
var player2_name = localStorage.getItem("player_name2");
document.getElementById("name1").innerHTML=player1_name + " :  ";
document.getElementById("name2").innerHTML=player2_name + " :  ";
var player1_score = 0;
var player2_score = 0;
document.getElementById("score1").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;
document.getElementById("ques_player").innerHTML = " " + "ques turn : " + player1_name;
document.getElementById("ans_player").innerHTML = " " + "ans turn : " + player2_name;88