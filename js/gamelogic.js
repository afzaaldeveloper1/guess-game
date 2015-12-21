i=1;
$("#begin").click(function() {
    $(".game").click(function() {
        for(i=1; i<6; i++){
		var answer = $( this ).val();
			var pcPick = Math.random();
			pcPick = 3*pcPick;
			pcPick = (Math.floor(pcPick))+1;
			if(answer == pcPick) {
				alert("You are correct!, I picked " + pcPick + "also");
			}else{
				alert("Incorrect, I picked " + pcPick);
			}
		});
		i++;
	}
});

