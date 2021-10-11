player_1= localStorage.getItem("player_1");
player_2= localStorage.getItem("player_2");

player1_score=0;
player2_score=0;

document.getElementById("player_name1").innerHTML= player_1+": ";
document.getElementById("player_name2").innerHTML= player_2+": ";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;