/* rounds */
var rounds = {
	// Create a variable to track the location of the rounds.
	// Valid values are: hook, inventory, body
	location:'body',

	// EXAMINE
	examine: function () {
		console.log('rounds.examine');
		// Store HTML to describe the rounds in a variable
		detail =
			"<p>You notice lines on two of the twelve rounds."+
			"What are you to etch on these two rounds?"+
			"<br>"+
			"<br>"+
			"<a href='#' onclick='rounds.etch()'>Etch</a>"+
			"</p>";

		// Hide the rounds menu popup menu
		popup = document.getElementById('roundsMenuId');
		popup.style.visibility = 'hidden';

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	etch: function () {
		console.log('rounds.etch');

/*
		var round1 = prompt("Round 1");
		var round2 = prompt("Round 2");
*/
		rounds.location = 'inventory';
		bottle.location = 'inventory';
		dagger.location = 'inventory';
		oilCanister.location = 'inventory';

		document.getElementById("item1").innerHTML = object.menuCreate('rounds');

		detail =
			"You place both the freshly-etched rounds and all remaining "+
			"scattered materials into your bag. “Excuse me, partner,” "+
			"you hear from the right, “You don’t look so hot, friend.” "+
			"Across from you is one dressed in familiar clothing, "+
			"clothing similar to yours. However, something about "+
			"this newfound acquaintance leaves you awestruck. ";


			// Make the browser display the HTML
			roomPara = document.getElementById('RoomDesc');
			roomPara.innerHTML = detail;
	},

	// GET
	get: function () {
		console.log('rounds.get');
		// Change the rounds location
		rounds.location = 'inventory';

		// Hide the rounds popup menu
		popup = document.getElementById('roundsMenuId');
		popup.style.visibility = 'hidden';

		// Recreate the rounds popup menu to hold appropriate options
		popup = document.getElementById('roundsLinkId');
		popup.innerHTML = rounds.menuCreate();

		// Store the HTML to describe the action of getting the rounds
		detail = "<p>You take the rounds from the disgruntled skeletal man. " +
				 "There is nothing left of interest for you here, so you decide to " +
				 "<a href='#' onclick='examineCave()'>go back.</a>" +
				/* "<a href='#' onclick='examineCave()'>room</a>" +
				 " you awoke in." +*/
				 "</p>";
		document.getElementById("item1").innerHTML = rounds.menuCreate();


		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	}
};
