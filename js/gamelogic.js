$("#beginGameButton").click(function() {
  var roundCount = 0;
  var humanScore = 0;
  var compScore = 0;
  
  $(this).hide();
  
  function computerChoice () {
  	var myNum = Math.floor(Math.random() * 3) + 1;
    return myNum;
  }

	$(".gameButton").click(function() {
  	if(roundCount++ === 5) {
	    alert("The game has gone for five rounds! Human: " + humanScore + ". Comp: " + compScore);
      $("#beginGameButton").show();
      humanScore = compScore = roundCount = 0;
      return;
    }
    var userChoice = parseInt($(this).val());
    var compChoice = computerChoice();

    if(compChoice === userChoice) {
      alert("You got the right answer!");
      humanScore++;
    } else {
      alert("You got the wrong answer. I picked " + compChoice);
      compScore++;
    }
	});
});





