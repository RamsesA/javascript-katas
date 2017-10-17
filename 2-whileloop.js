/*  1.2 While Loop */

// Conditional where flavor = chocolate or vanilla
// Prompt for flavor, then output "here's your" + flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"
// Continue while flavor not equal; to "coffee"
// write "NO coffee allowed"
scoop = prompt("What flavor would you like?");
do{
	if ( scoop == "chocolate" || scoop == "vanilla") {
	alert("Here's your "+scoop);
	}

	else if ( scoop == "strawberry") {
	alert("We're all out of "+scoop);
	}

	else{
		alert("There is no such flavor.")
	}
}
while( scoop != "coffee");
alert("No coffe allowed in school")

