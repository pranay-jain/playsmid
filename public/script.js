$(document).ready(function () {
	var markers = [];
	var genes = [];
	var promoters = [];
	var correct;

	$('.geneTool, .markerTool').click(function () {
		$(this).css("opacity", 0.7);
	});


	$('.geneTool p').click(function () {
		var marker = $(this).html(); //shouldn't this be gene = ? mixed up
		if (markers.indexOf(marker) > -1) {
			markers.splice(markers.indexOf(marker), 1);
		} else {
			markers.push(marker);
		}
		//console.log(marker);
	});

	$('.promoTool p').click(function () {
		var promoter = $(this).html();
		if (promoters.indexOf(promoter) > -1) {
			promoters.splice(promoters.indexOf(promoter), 1);
		} else {
			promoters.push(promoter);
		}
		//console.log(promoter);
	});

	$('.markerTool p').click(function () {
		var gene = $(this).html(); //should be marker?
		if (genes.indexOf(gene) > -1) {
			genes.splice(genes.indexOf(gene), 1);
		} else {
			genes.push(gene);
		}
		//console.log(gene);

	});


	$('#transform').click(function () {
		if (level.level < 1) {
			for (var i = level.cases.length - 1; i >= 0; i--) {
				if(genes[0] == level.cases[i].input) {
					if(level.cases[i].isCorrect) {
						$('#smear').attr("src", level.cases[i].output);
						console.log(level.cases[i].output);
						alert("That's the correct answer!");
						correct = true;
					}
				}
			}
		} else if (level.level < 3) {
			var gene = genes[0];
			var marker;
			if (markers.length === 0) {
				marker = null;
			} else {
				marker = markers[0];
			}
			var promoter;
			if (promoters.length === 0) {
				promoter = null;
			} else {
				promoter = promoters[0];
			}
			for (var i = level.cases.length - 1; i >= 0; i--) {
				var case = level.cases[i];
				if(gene === case.inputGene && (case.inputMarker === marker ||
					case.indexOf(markers[0]) > -1) && case.inputPromoter === promoter) {
					if(level.cases[i].isCorrect) {
						$('#smear').attr("src", level.cases[i].output);
						console.log(level.cases[i].output);
						alert("That's the correct answer!");
						correct = true;
					}
				}
			}
		} else if (level.level < 5) {
			// Logic for Puzzles 3 and 4

		} else if (level.level < 6) {
			// Lead Inducible Gene Puzzle (ensure that this logic is encoded in the db)

		} else {

		}
	});
});

$('#next').click(function (){
	//if (correct) {
		window.location.replace("/play/" + parseInt(level.level+1));
	//}
});

