/*  1.2 While Loop */

// Conditional where flavor = chocolate or vanilla
// Prompt for flavor, then output "here's your" + flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"

scoop = prompt("What flavor would you like?");

	if ( scoop == "chocolate" || scoop == "vanilla") {
	alert("Here's your "+scoop);
	}

	else if ( scoop == "strawberry") {
	alert("We're all out of "+scoop);
	}

	else{
		alert("There is no such flavor.")
	}
