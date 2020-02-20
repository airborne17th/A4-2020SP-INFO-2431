$(document).ready(function() {
		$("#pic").mouseover(function(){
			$(this).animate({ margin: 0, width: "+=25%", height: "+=25%" }, 800);
			});
		$("#pic").mouseout(function() {
				$(this).animate({ margin: 0, width: "-=25%", height: "-=25%" }, 800);
			})​;
		});