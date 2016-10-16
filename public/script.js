$(document).ready(function () {
	var markers = [];
	var genes = [];
	var promoters = [];

	$('.geneTool').click(function () {
		$(this).css("opacity", 0.7);
	});


	$('.geneTool p').click(function () {
		var marker = $(this).html(); //shouldn't this be gene = ? mixed up
		if (markers.indexOf(marker) > -1) {
			markers.splice(markers.indexOf(marker), 1);
		} else {
			markers.push(marker);
		}
		console.log(marker);
	});

	$('.promoTool p').click(function () {
		var promoter = $(this).html();
		if (promoters.indexOf(promoter) > -1) {
			promoters.splice(promoters.indexOf(promoter), 1);
		} else {
			promoters.push(promoter);
		}
		console.log(promoter);
	});

	$('.markerTool p').click(function () {
		var gene = $(this).html(); //should be marker?
		if (genes.indexOf(gene) > -1) {
			genes.splice(genes.indexOf(gene), 1);
		} else {
			genes.push(gene);
		}
		console.log(gene);

	});

	$('button').click(function () {
		if (level.level < 5) {
			for (var i = level.cases.length - 1; i >= 0; i--) {
				if(genes[0] == level.cases[i].input) { // && marker == cases[i].inputMarker
					if(level.cases[i].isCorrect) {
						console.log("Correct!");
						break;
					}
				}
			}
		} else if (level.level < 6) {
			// Lead Inducible Gene Puzzle (ensure that this logic is encoded in the db)

		} else {

		}
	});
});
