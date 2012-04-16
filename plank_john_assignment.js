//John Planak 




var terrian      = "urban ";
var time         = 2400;
var baddies      = "Russians ";
var map          = "Kharg Island ";    
var friendlies   = "Americans ";
var hump         = "Annoy "
//Object 1 

var user = { gamerTag:   [ "cackmongerr ", "dmusicstud", "eurofreak", "Airdemon", "AfricanAids", "squilley" ],
			 rank:       ["Staff Sargeant ", "Sargeant ", "Captain ", "Corporal", "Colonel" ], 
			 specialty:  ["Support ", "Engineer ", "Assualt ", "Medic"],
			 moto:       ["SPOON!!! ", "that faggetty faggy bear ", "stupid 12 year olds "],
			 weaponType: [ "Assualt rile ", "Shotgun ", "Sniper Rifle ", "Machinegun ", "Pistols ", 
			 			 ["Scar-h ", "G3 ", "Spas12 ", "Doa-12 ", "M82 ", "Mk11 ", "M249 ", "M60 ", "M1911 ", "MP412 Rex "] ],

			 			message: function (num) {
			console.log("that dude started to " + hump + "me\n " + num  + " times so I shot him with my " 
						+ user.weaponType[0], user.weaponType[5][1]);
}
};

console.log(user.gamerTag[0], user.message(3) + ' says to me " dude "');