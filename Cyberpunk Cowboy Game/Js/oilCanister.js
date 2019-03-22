/* oilCanister */
var oilCanister = {
	// Create a variable to track the location of the oilCanister.
	// Valid values are: hook, inventory, body
	location:'body',

	// oilCanister MENU CREATE
	menuCreate: function () {
		console.log('oilCanister.menuCreate');
		console.log('   location = ' + this.location);
		// Store the HTML for the oilCanister's popup menu in a variable
		// EXAMINE option is always in the popup menu
		menu =
			"<span id='oilCanisterLinkId' class='popup'>" +
				"<a href='#' onclick='oilCanister.menuDisplay()'>" +
					"Oil Canister" +
				"</a>" +
				"<span id='oilCanisterMenuId' class='popuptext'>" +
					"<u onclick='oilCanister.examine()'>" +
						"Examine" +
					"</u>";
		// GET option is in the popup menu if the oilCanister is on the
		if (oilCanister.location == 'body') {
			menu = menu +
				"</span>" +
			"</span>";
		}
		// Detect errors in the oilCanister location
		else if (oilCanister.location == 'inventory') {

		}
		else {
			console.log('ERROR! Invalid location');
		}

		// Give the HTML for the popup menu to the caller
		return(menu)
	},

	// oilCanister MENU DISPLAY
	menuDisplay: function () {
		console.log('oilCanister.menuDisplay');
		// Make the browser display the popup menu
		popup = document.getElementById('oilCanisterMenuId');
		popup.style.visibility = 'visible';
	},

	// EXAMINE
	examine: function () {
		console.log('oilCanister.examine');
		// Store HTML to describe the oilCanister in a variable
		detail =
			"<p>You notice lines on two of the twelve oilCanister."+
			"What are you to etch on these two oilCanister?"+
			"<br>"+
			"<br>"+
			"<a href='#' onclick='oilCanister.etch()'>Etch</a>"+
			"</p>";

		// Hide the oilCanister menu popup menu
		popup = document.getElementById('oilCanisterMenuId');
		popup.style.visibility = 'hidden';

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	etch: function () {
		console.log('oilCanister.etch');

		var round1 = prompt("Round 1");
		var round2 = prompt("Round 2");

		oilCanister.location = 'inventory';
		bottle.location = 'inventory';
		dagger.location = 'inventory';
		oilCanister.location = 'inventory';
		oilCanister.location = 'inventory';

		detail =
			"You place both the freshly-etched oilCanister and all remaining "+
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
		console.log('oilCanister.get');
		// Change the oilCanister location
		oilCanister.location = 'inventory';

		// Hide the oilCanister popup menu
		popup = document.getElementById('oilCanisterMenuId');
		popup.style.visibility = 'hidden';

		// Recreate the oilCanister popup menu to hold appropriate options
		popup = document.getElementById('oilCanisterLinkId');
		popup.innerHTML = oilCanister.menuCreate();

		// Store the HTML to describe the action of getting the oilCanister
		detail = "<p>You take the oilCanister from the disgruntled skeletal man. " +
				 "There is nothing left of interest for you here, so you decide to " +
				 "<a href='#' onclick='examineCave()'>go back.</a>" +
				/* "<a href='#' onclick='examineCave()'>room</a>" +
				 " you awoke in." +*/
				 "</p>";
		document.getElementById("item1").innerHTML = oilCanister.menuCreate();


		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	}
};
