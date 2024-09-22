var cPoint = document.querySelector(".cPoint");
var pPoint = document.querySelector(".pPoint");
var cChoice = document.querySelector(".cChoice");
var pChoice = document.querySelector(".pChoice");
var winner = document.querySelector(".winner");
var computerChoice;
var cCount=0,pCount=0;
console.log(cPoint);
console.log(pPoint);
console.log(cChoice);
console.log(pChoice);
console.log(winner);
function play(playerChoice){
	pChoice.innerText="Player choice:"+playerChoice;
	var random = Math.floor(Math.random()*3);
	console.log(random);
	if(random==0){
		cChoice.innerText="Computer choice:scissors";
		computerChoice="scissors";
	}else if(random==1){
		cChoice.innerText="Computer choice:paper";
		computerChoice="paper";
	}else{
		cChoice.innerText="Computer choice:rock";
		computerChoice="rock";
	}
	if((playerChoice=="paper" && computerChoice=="rock")||(playerChoice=="scissors" && computerChoice=="paper")||(playerChoice=="rock" && computerChoice=="scissors")){
		winner.innerText="Winner:Player";
		pCount++;
	}else if(computerChoice==playerChoice){
		winner.innerText="Winner:Player";
	}else{
		winner.innerText="Winner:Computer";
		cCount++;
	}
	cPoint.innerText="Computer:"+cCount;
	pPoint.innerText="Player:"+pCount;
}
	

function restart(){
	cCount=0;
	pCount=0;
	cPoint.innerText="Computer:0";
	pPoint.innerText="Player:0";
	winner.innerText="Winner:";
	pChoice.innerText="Player choice:";
	cChoice.innerText="Computer choice:";
}