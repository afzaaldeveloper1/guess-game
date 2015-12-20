$("button").click(function() {
	var text = $( this ).text();
  	$( "input" ).val( text );
	var pcPick = Math.random();
	pcPick = 4*pcPick;
	pcPick = (Math.floor(pcPick))+1;
	if(text == pcPick) {
		alert("You are correct!");
	}else{
		alert("Incorrect, I picked " + pcPick);
	}
});

