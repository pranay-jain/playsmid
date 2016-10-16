$(document).ready(function () {
	var markers = [];
	var genes = [];
	var promoters = [];
	var correct = false;
	var plasmidEntries = [];

	$('.geneTool, .markerTool').click(function () {
		$(this).css("opacity", 0.7);
	});

	// Plasmid image reposition

	$('.geneTool p').click(function () {
		var marker = $(this).html(); //shouldn't this be gene = ? mixed up
		if (markers.indexOf(marker) > -1) {
			markers.splice(markers.indexOf(marker), 1);
		} else {
			markers.push(marker);
		}

		plasmidEntries.push(marker);

	});

	$('.promoTool p').click(function () {
		var promoter = $(this).html();
		if (promoters.indexOf(promoter) > -1) {
			promoters.splice(promoters.indexOf(promoter), 1);
		} else {
			promoters.push(promoter);
		}
		plasmidEntries.push(marker);
		//console.log(promoter);
	});

	$('.markerTool p').click(function () {
		var gene = $(this).html(); //should be marker?
		if (genes.indexOf(gene) > -1) {
			genes.splice(genes.indexOf(gene), 1);
		} else {
			genes.push(gene);
		}
		plasmidEntries.push(marker);
		//console.log(gene);

	});


	$('#transform').click(function () {
		if (level.level < 1) {
			for (var i = level.cases.length - 1; i >= 0; i--) {
				if(genes[0] == level.cases[i].input) {
					if(level.cases[i].isCorrect) {
						$('#smear').attr("src", level.cases[i].output);
						console.log(level.cases[i].output);
						alert(level.successText);
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
				var currCase = level.cases[i];
				if(gene === currCase.inputGene && currCase.inputMarker.indexOf(markers[0])
				> -1 && currCase.inputPromoter === promoter) {
					if(level.cases[i].isCorrect) {
						$('#smear').attr("src", level.cases[i].output);
						console.log(level.cases[i].output);
						alert(level.successText);
						correct = true;
					}
				}
			}
		} else if (level.level < 5) {
			// Logic for Puzzles 3 and 4
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
			var firstCorrect = false;
			for (var i = level.cases.length - 1; i >= 0; i--) {
				var currCase = level.cases[i];
				if(gene === currCase.inputGene && currCase.inputMarker.indexOf(markers[0])
				> -1 && currCase.inputPromoter === promoter) {
					if(level.cases[i].isCorrect) {
						if (firstCorrect) {
							correct = true;
						} else {
							firstCorrect = true;
						}
					}
				}
			}
		} else if (level.level < 6) {
			// Lead Inducible Gene Puzzle (ensure that this logic is encoded in the db)
			if (genes.length > 1 && promoters.length > 1) {
				if (genes[0] !== genes[1]) {
					if (['lead', 'none'].indexOf(promoters[0]) > -1) {
						if (promoters[1] === 'sugar') {
							correct = true;
						}
					} else {
						if (['lead', 'none'].indexOf(promoters[1]) > -1) {
							correct = true;
						}
					}
				}
			}
		} else {
			// Logic for Puzzle 6
		}
		if (!correct) {
			alert(level.failureText);
		}
	});

	$('#next').click(function (){
		if (correct) {
			window.location.replace("/play/" + parseInt(level.level+1));
		} else {
			alert("complete this level first!");
		}
	});



	// Place plasmid images

	var imgsrc = {
		"red": "",
		"blue": "",
		"yellow": "",
		"KanMX": "",
		"BleoMX": "",
		"NatMX": ""
	};



	for (var i = plasmidEntries.length - 1; i >= 0; i--) {
		if (i%4===0)
			$('.bottomSlot').attr("src", plasmidEntries[i]);
		else if (i%4===1)
			$('.topSlot').attr("src", plasmidEntries[i]);
		else if (i%4===2)
			$('.leftSlot').attr("src", plasmidEntries[i]);
		else
			$('.rightSlot').attr("src", plasmidEntries[i]);
	}


});
