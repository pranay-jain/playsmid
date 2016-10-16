$(document).ready(function () {
	var marker;
	var gene;
	var promoter;

	$('.geneTool, .markerTool').click(function () {
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
		if (level.level < 3) {
			for (var i = level.cases.length - 1; i >= 0; i--) {
				if(gene == level.cases[i].input) { // && marker == cases[i].inputMarker
					if(level.cases[i].isCorrect) {
						console.log("Correct!");
						alert("That's the correct answer!");
						window.location.replace("/play/" + parseInt(level.level+1));
					}
				}
			}
		}
	});

	var casesOne = [

            {
                "inputGene": "red",
                "inputMarker" : null,
                "inputPromoter" : null,
                "output": "red/wild",
                "isCorrect": false
            },
            {
                "inputGene": "yellow",
                "inputMarker" : null,
                "inputPromoter" : null,
                "output": "yellow/wild",
                "isCorrect": false
            },
            {
                "inputGene": "blue",
                "inputMarker" : null,
                "inputPromoter" : null,
                "output": "blue/wild",
                "isCorrect": false
            },
            {
                "inputGene": "blue",
                "inputMarker" : ["KanMX", "NatMX", "BleoMX"],
                "inputPromoter" : null,
                "output": "blue",
                "isCorrect": false
            },
            {
                "inputGene": "red",
                "inputMarker" : ["KanMX", "NatMX", "BleoMX"],
                "inputPromoter" : null,
                "output": "red",
                "isCorrect": true
            },
            {
                "inputGene": "yellow",
                "inputMarker" : ["KanMX", "NatMX", "BleoMX"],
                "inputPromoter" : null,
                "output": "yellow",
                "isCorrect": false
            }];
    var casesTwo = [
            {
                "inputGene": "yellow",
                "inputMarker" : ["KanMX", "BleoMX"],
                "inputPromoter" : null,
                "output": "yellow",
                "isCorrect": true
            }, {
                "inputGene": "yellow",
                "inputMarker" : "NatMX",
                "inputPromoter" : null,
                "output": "yellow/blue",
                "isCorrect": false
            }, {
                "inputGene": "red",
                "inputMarker" : ["KanMX", "BleoMX"],
                "inputPromoter" : null,
                "output": "red",
                "isCorrect": false
            }, {
                "inputGene": "red",
                "inputMarker" : "NatMX",
                "inputPromoter" : null,
                "output": "red/blue",
                "isCorrect": false
            }, {
                "inputGene": "blue",
                "inputMarker" : ["KanMX", "BleoMX", "NatMX"],
                "inputPromoter" : null,
                "output": "blue",
                "isCorrect": false
        }];
});
