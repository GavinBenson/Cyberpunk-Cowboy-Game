/* dagger */
var dagger = {
	// Create a variable to track the location of the dagger.
	// Valid values are: hook, inventory, body
	location:'body',

	// dagger MENU CREATE
	menuCreate: function () {
		console.log('dagger.menuCreate');
		console.log('   location = ' + this.location);
		// Store the HTML for the dagger's popup menu in a variable
		// EXAMINE option is always in the popup menu
		menu =
			"<span id='daggerLinkId' class='popup'>" +
				"<a href='#' onclick='dagger.menuDisplay()'>" +
					"Dagger" +
				"</a>" +
				"<span id='daggerMenuId' class='popuptext'>" +
					"<u onclick='dagger.examine()'>" +
						"Examine" +
					"</u>";
		// GET option is in the popup menu if the dagger is on the
		if (dagger.location == 'body') {
			menu = menu +
				"</span>" +
			"</span>";
		}
		// Detect errors in the dagger location
		else if (dagger.location == 'inventory') {

		}
		else {
			console.log('ERROR! Invalid location');
		}

		// Give the HTML for the popup menu to the caller
		return(menu)
	},

	// dagger MENU DISPLAY
	menuDisplay: function () {
		console.log('dagger.menuDisplay');
		// Make the browser display the popup menu
		popup = document.getElementById('daggerMenuId');
		popup.style.visibility = 'visible';
	},

	// EXAMINE
	examine: function () {
		console.log('dagger.examine');
		// Store HTML to describe the dagger in a variable
		detail =
			"<p>You notice lines on two of the twelve dagger."+
			"What are you to etch on these two dagger?"+
			"<br>"+
			"<br>"+
			"<a href='#' onclick='dagger.etch()'>Etch</a>"+
			"</p>";

		// Hide the dagger menu popup menu
		popup = document.getElementById('daggerMenuId');
		popup.style.visibility = 'hidden';

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	etch: function () {
		console.log('dagger.etch');

		var round1 = prompt("Round 1");
		var round2 = prompt("Round 2");

		dagger.location = 'inventory';
		bottle.location = 'inventory';
		dagger.location = 'inventory';
		dagger.location = 'inventory';
		oilCanister.location = 'inventory';

		detail =
			"You place both the freshly-etched dagger and all remaining "+
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
		console.log('dagger.get');
		// Change the dagger location
		dagger.location = 'inventory';

		// Hide the dagger popup menu
		popup = document.getElementById('daggerMenuId');
		popup.style.visibility = 'hidden';

		// Recreate the dagger popup menu to hold appropriate options
		popup = document.getElementById('daggerLinkId');
		popup.innerHTML = dagger.menuCreate();

		// Store the HTML to describe the action of getting the dagger
		detail = "<p>You take the dagger from the disgruntled skeletal man. " +
				 "There is nothing left of interest for you here, so you decide to " +
				 "<a href='#' onclick='examineCave()'>go back.</a>" +
				/* "<a href='#' onclick='examineCave()'>room</a>" +
				 " you awoke in." +*/
				 "</p>";
		document.getElementById("item1").innerHTML = dagger.menuCreate();


		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	}
};
