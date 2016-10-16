$(document).ready(function () {
	var marker;
	var gene;
	var promoter;

	var markerButton = $('.geneTool p');


	$('.geneTool p').click(function () {
		marker = $(this).html();
		console.log(marker);
	});

	$('.promoTool p').click(function () {
		promoter = $(this).html();
		console.log(promoter);
	});

	$('.markerTool p').click(function () {
		gene = $(this).html();
		console.log(gene);
		
	});

	$('button').click(function () {
		for (var i = cases.length - 1; i >= 0; i--) {
			if(gene == cases[i].input) {
				if(cases[i].isCorrect) {
					console.log("Correct!");
				}
			}
		}
	});

	var cases = [
			{
				"input": "red",
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