$(document).ready(function () {
	var marker;
	var gene;
	var promoter;

	$('.geneTool').click(function () {
		$(this).css("opacity", 0.7);
	});

	
	$('.geneTool p').click(function () {
		marker = $(this).html(); //shouldn't this be gene = ? mixed up
		console.log(marker); 
	});

	$('.promoTool p').click(function () {
		promoter = $(this).html();
		console.log(promoter);
	});

	$('.markerTool p').click(function () {
		gene = $(this).html(); //should be marker?
		console.log(gene);
		
	});

	$('button').click(function () {
		for (var i = casesZero.length - 1; i >= 0; i--) {
			if(gene == casesZero[i].input) { // && marker == cases[i].inputMarker
				if(casesZero[i].isCorrect) {
					console.log("Correct!");
				}
			}
		}
	});

	var casesZero = [
			{
				"input": "red", //change to inputGene? or just gene? and Add inputMarker variable to check
				"output": "red/wild",
				"isCorrect": true
			},
			{
				"input": "yellow",
				"output": "yellow/wild",
				"isCorrect": false
			},
			{
				"input": "blue",
				"output": "blue/wild",
				"isCorrect": false
			}];
});
