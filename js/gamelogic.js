$("button").click(function() {
	var answer = $( this ).val();
	var pcPick = Math.random();
	pcPick = 4*pcPick;
	pcPick = (Math.floor(pcPick))+1;
	if(answer == pcPick) {
		alert("You are correct!");
	}else{
		alert("Incorrect, I picked " + pcPick);
	}
});

