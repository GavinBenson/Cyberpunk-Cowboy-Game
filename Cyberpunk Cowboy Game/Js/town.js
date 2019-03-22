var town = {

	start: function() {

		var detail = "";
			detail =
			"<p>You awake covered in sand. Dust cakes your clothing and trusty "+
			"six-shooter. Outside of your sense of self, you remember nothing. "+
			"On your person belongs a vest, a satchel to your left hip, a "+
			"holster to your right, a pair of trousers and a torn plaid shirt. "+
			"You notice your satchel feels awfully light, peculiar as bags "+
			"aren't meant to be empty. As your vision returns to you, you scour "+
			"the surrounding landscape. You notice an empty glass bottle, a "+
			"four-inch dagger, a scattering of twelve blue-ringed " + object.menuCreate('rounds') + ", "+
		  "and an empty oil canister in your midst. Are these the contents of your bag?"+
			"</p>";

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = detail;
	},

	examineCave: function() {
		document.getElementById('ascii').style.visibility = 'visible';
		var a = 'armor';

		detail =
			"<p> You are standing in a small cave, with 3 different openings. "+
			"There is one to the "+
			"<a href='#' onclick='armorRoom.start()'>east</a>, "+
			"that has moss and other plants covering the entrance. "+
			"It is difficult to see into due to the plants covering it. "+
			"There is another opening to the "+
			"<a href='#' onclick='tunnelRoom.start()'>north</a>, "+
			" and it is quite small. However, you can see light coming from it. "+
			"To the "+
			"<a href='#' onclick='swordRoom.start()'>west</a> "+
			" you see another opening, which has wooden supports holding it up. "+
			"Some of the wooden supports have fallen over, others are covered in moss and mold. "+
			"Behind you, you see another "+
      "<a href='#' onclick='witchRoom()'>opening</a>, "+
      " covered in moss. There are cracked and broken stone pillars around the entrance. "+
      "You can hear a faint cackling and screaming coming from the room. "+
			"<a href='#' onclick='object.menuCreate(\""+a+"\")'>opening</a>, "+
			"</p>"
		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML =  description;
	}
}
