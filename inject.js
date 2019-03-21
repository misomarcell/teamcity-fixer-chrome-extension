(function() {
	var svgElements = document.getElementsByTagName("svg");

	for (var i=0; i < svgElements.length - 1; i++) {     
		var c = window.getComputedStyle(svgElements[i]).getPropertyValue('color');
		var f = window.getComputedStyle(svgElements[i]).getPropertyValue('fill');

		if(c === "rgb(219, 88, 96)" || f === "rgb(219, 88, 96)") {
			svgElements[i].style.color = "#59a869";
			svgElements[i].style.fill = "#59a869";
		}	
	}

})();