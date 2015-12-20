var pcPick = Math.random();
pcPick = 4*pcPick;
pcPick = (Math.floor(pcPick))+1;

$("#one").click(function(){
	if(pcPick == 1){
		alert("You are correct!");
	}else{
		alert("Incorrect, I picked button " + pcPick);
	}
});
$("#two").click(function(){
	if(pcPick == 2){
		alert("You are correct!");
	}else{
		alert("Incorrect, I picked button " + pcPick);
	}
});
$("#three").click(function(){
	if(pcPick == 3){
		alert("You are correct!");
	}else{
		alert("Incorrect, I picked button " + pcPick);
	}
});