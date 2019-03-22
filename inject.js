(function() {
	var svgElements = document.getElementsByTagName("svg");
var pathElements = document.getElementsByTagName("path");
var spanElements = document.getElementsByTagName("span");
var successPath = "M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM6.46 12.79L1.67 8l1.66-1.67 3.13 3.14 5.82-5.8 1.66 1.66z";
var failedPath = "M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 13.94a1.42 1.42 0 1 1 1.42-1.41A1.42 1.42 0 0 1 8 13.94zM9.67 3.6l-.43 5.5a1.18 1.18 0 0 1-1.3 1 1.17 1.17 0 0 1-1.14-1l-.43-5.5A1.54 1.54 0 0 1 7.91 2a1.6 1.6 0 0 1 1.76 1.4z";

	// Change failed svg colors to green
	for (var i=0; i < svgElements.length - 1; i++) {     
		var c = window.getComputedStyle(svgElements[i]).getPropertyValue('color');
		var f = window.getComputedStyle(svgElements[i]).getPropertyValue('fill');

		if(c === "rgb(219, 88, 96)" || f === "rgb(219, 88, 96)") {
			svgElements[i].style.color = "#59a869";
			svgElements[i].style.fill = "#59a869";
		}	
	}

	// Replace failed svg to success svg
	for (var i=0; i < pathElements.length - 1; i++) {     
		if(pathElements[i].getAttribute("d") === failedPath)
        {
			pathElements[i].setAttribute("d", successPath);
        }
    }

	// Replace 'failed' with 'not failed'
	for (var i=0; i < spanElements.length - 1; i++) { 
		if(spanElements[i].innerText.includes("failed"))
        {
			spanElements[i].innerText = spanElements[i].innerText.replace("failed", "not failed");
        }
    }
	
	// Fix failure status block inside build
	var failureBlockElements = window.document.getElementsByClassName("failureStatusBlock");
	if(failureBlockElements.length > 0)
	{
		failureBlockElements[0].style.border = "#4da400 solid 1px";
		failureBlockElements[0].style.backgroundColor = "#f5fbf7";	
	}
})();