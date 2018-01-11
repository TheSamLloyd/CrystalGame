function randVal(a,b){
	return Math.floor(Math.random()*(b-a)+a+1);
}
function gameStart(){
	setScore(0);
	target=0;
	$(".crystal").each(function(i){
		//each crystal gets a random value;
		$(this).attr("value",randVal(1,12));
		//this line ensures winning is possible:
		target+=randVal(0,6)*$(this).attr("value");
		//programmatically add the images (maybe in the future we want MORE crystals)
		$(this).attr("src","assets/images/crystal"+i+".jpg")
	})
	$("#target").text(target);
	$("#status-text").text("Click any crystal to play!")
}
//init conditions;
var wins=0; var losses=0;
gameOver = false;;

gameStart();
//click listener
$(".crystal").on("click",function(){
	if (!gameOver){
		setScore($(this).attr("value"));
		check();
	}
	else{
		gameOver=false;
		gameStart()
	}
})
//helper functions to automate scoring, game winning/loss
function setScore(n){
	if (n>0){
		score+=parseInt(n);
	}
	else score=0;
	$("#score").text(score)
}
function check(){
	if (score==target) win();
	else if (score>target) lose();
}
function win(){
	//change status text to "you win"
	$("#status-text").text("You win! Click any crystal to play again! Maybe next time you won't be so lucky.")
	$("#wins").text(++wins);
	gameOver=true;
}
function lose(){
	//change status text to "you lose!"
	$("#status-text").text("You lose! I knew you didn't have it in you. Click any crystal to play again.")
	$("#losses").text(++losses);
	gameOver=true;
}