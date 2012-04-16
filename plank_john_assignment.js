//John Planak 
//
//Just another day "Battlefield 3 style"


var terrian      = "urban ";
var time         = 2400;
var baddies      = "Russians ";
var map          = "Kharg Island ";    
var friendlies   = "Americans ";
var annoy         = "hump ";
//Object 1 

var user = { gamerTag:   [ "cackmongerr ", "dmusicstud", "eurofreak", "Airdemon", "AfricanAids", "squirlley" ],
			 rank:       ["Staff Sargeant ", "Sargeant ", "Captain ", "Corporal", "Colonel" ], 
			 specialty:  ["Support ", "Engineer ", "Assualt ", "Medic"],
			 moto:       ["SPOON!!! ", "that faggetty faggy bear ", "stupid 12 year olds "],
			 weaponType: [ "Assualt rile ", "Shotgun ", "Sniper Rifle ", "Machinegun ", "Pistols ", 
			 			 ["Scar-h ", "G3 ", "Spas12 ", "Doa-12 ", "M82 ", "Mk11 ", "M249 ", "M60 ", "M1911 ", "MP412 Rex "] ],

			 			message: function (num) {
			console.log("that dude " + annoy + "me\n " + num  + " times so I shot him with my " 
						+ user.weaponType[0], user.weaponType[5][1]);
}
};

console.log(user.gamerTag[0] + "said to " + user.gamerTag[1]);
user.message(3); 



var vehicile = { tanks: [m1Abrams = {name: "M1 m1Abrams",
									topSpeed:      "56 KM/H",
									driverWeapons: "main canon and coaxial LMG or HMG",
									passengerWeapons: "heavy machine gun",
									ammunition: "unlimited"
									},


		       	    	 t90      = {name: "T90 ",
		       	    	 			 topSpeed:      "56 KM/H",
									 driverWeapons: "main canon and coaxial LMG or HMG",
									 passengerWeapons: "heavy machine gun",
									 ammunition: "unlimited"
									}		
									],			
		 helicpoters: [aH64Apache = {name:      "Apache ",
		   							   seats:     "gunner and  pilot ",
									   topSpeed: "330 KM/H",
        							   standardWeapons: "rockets and Gatling gun"
		   					    	  }, 
		   			   Mi28       = {name:              "Mi 28 ",
		   				 			   seats:              2,
									   topSpeed:         "320 KM/H ",
                                       standardWeapons:  " rockets and Gatling gun ",
   									} 
   									],

   		   transports:  [growler  = {name:       "Growler ",
 						 			 topSpeed:   "75 KM/H ",
								     armament:   ".50 cal machine gun ",
   									 seats:       3
            						 },
            			 vdvBuggy = {name:        "VDV Buggy ",
            			             topSpeed:   "75 KM/H ",
									 armament:    ".50 cal machine gun ", 
									 seats:        3 
				           			 }						 		               
				           			 ]
				 
};

console.log(vehicile);


