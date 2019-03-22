/* bottle */
var bottle = {
	// Create a variable to track the location of the bottle.
	// Valid values are: hook, inventory, body
	location:'body',

	// bottle MENU CREATE
	menuCreate: function () {
		console.log('bottle.menuCreate');
		console.log('   location = ' + this.location);
		// Store the HTML for the bottle's popup menu in a variable
		// EXAMINE option is always in the popup menu
		menu =
			"<span id='bottleLinkId' class='popup'>" +
				"<a href='#' onclick='bottle.menuDisplay()'>" +
					"Bottle" +
				"</a>" +
				"<span id='bottleMenuId' class='popuptext'>" +
					"<u onclick='bottle.examine()'>" +
						"Examine" +
					"</u>";
		// GET option is in the popup menu if the bottle is on the
		if (bottle.location == 'body') {
			menu = menu +
				"</span>" +
			"</span>";
		}
		// Detect errors in the bottle location
		else if (bottle.location == 'inventory') {

		}
		else {
			console.log('ERROR! Invalid location');
		}

		// Give the HTML for the popup menu to the caller
		return(menu)
	},

	// bottle MENU DISPLAY
	menuDisplay: function () {
		console.log('bottle.menuDisplay');
		// Make the browser display the popup menu
		popup = document.getElementById('bottleMenuId');
		popup.style.visibility = 'visible';
	},

	// EXAMINE
	examine: function () {
		console.log('bottle.examine');
		// Store HTML to describe the bottle in a variable
		detail =
			"<p>You notice lines on two of the twelve bottle."+
			"What are you to etch on these two bottle?"+
			"<br>"+
			"<br>"+
			"<a href='#' onclick='bottle.etch()'>Etch</a>"+
			"</p>";

		// Hide the bottle menu popup menu
		popup = document.getElementById('bottleMenuId');
		popup.style.visibility = 'hidden';

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	etch: function () {
		console.log('bottle.etch');

		var round1 = prompt("Round 1");
		var round2 = prompt("Round 2");

		bottle.location = 'inventory';
		bottle.location = 'inventory';
		dagger.location = 'inventory';
		bottle.location = 'inventory';
		oilCanister.location = 'inventory';

		detail =
			"You place both the freshly-etched bottle and all remaining "+
			"scattered materials into your bag. “Excuse me, partner,” "+
			"you hear from the right, “You don’t look so hot, friend.” "+
			"Across from you is one dressed in familiar clothing, "+
			"clothing similar to yours. However, something about "+
			"this newfound acquaintance leaves you awestruck. ";

			// Make the browser display the HTML
			roomPara = document.getElementById('RoomDesc');
			roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// GET
	get: function () {
		console.log('bottle.get');
		// Change the bottle location
		bottle.location = 'inventory';

		// Hide the bottle popup menu
		popup = document.getElementById('bottleMenuId');
		popup.style.visibility = 'hidden';

		// Recreate the bottle popup menu to hold appropriate options
		popup = document.getElementById('bottleLinkId');
		popup.innerHTML = bottle.menuCreate();

		// Store the HTML to describe the action of getting the bottle
		detail = "<p>You take the bottle from the disgruntled skeletal man. " +
				 "There is nothing left of interest for you here, so you decide to " +
				 "<a href='#' onclick='examineCave()'>go back.</a>" +
				/* "<a href='#' onclick='examineCave()'>room</a>" +
				 " you awoke in." +*/
				 "</p>";
		document.getElementById("item1").innerHTML = bottle.menuCreate();


		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	}
};
