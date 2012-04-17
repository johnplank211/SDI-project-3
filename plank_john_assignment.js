//John Planak 
//
//Just another day "Battlefield 3 style"


var terrian      = "urban ";
var time         = 2400;
var map          = "Kharg Island ";    
var friend   	 = "Americans ";
var foe          = "Russians "
var annoy        = "hump ";
//Object 1 

var john = { gamerTag:  "cackmongerr ", 
			 rank:      "Staff Sargeant ", 
			 specialty: "Support ",
			 moto:      "SPOON!!! ",
			 weapon: { weaponType: "Doa-12 ", maxRange: "50mm ", maxCapacity: "12 rounds ", 
			 		   firing: "semi auto ", damage: 50, sound: "boom boom!! " },
                     
                hitPoints: 0,
                score: 0,
     			travelTo: function (map) {
             	    console.log(nate.gamerTag + "selects " + map + "to joins TnA for some killing ")
             },
             makeEveryoneRich: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and show everyone how rich we are. " )
             }
};
//object 2
var brandon = { gamerTag:  "dmusicstud ",
				rank:      "Sargeant ",
				specialty: "Assualt ",
				moto:      "that faggetty fag bear!! ",
			    weapon: { weaponType: "F2000 ", maxRange: "500mm ", maxCapacity: "30 rounds ",
			              firing: "semi, burst, auto ", damage: 25, Sound: "bang bang ", score: 25 },
                                                      
                hitPoints: 0,
                score: 0,
				travelTo: function (map) {
             	    console.log(nate.gamerTag + "selects " + map + "to joins TnA for some killing ")
             },
             	makeEveryoneRich: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and show everyone how rich we are. " )
             }
};                           

// Object 3
var nate = { gamerTag:   "eurofreak ",
			 rank:       "Corporal ",
			 specialty:  "Assault ",
			 moto:       "stupid 12 year olds!! ",
		     weapon: { weaponType: "Scar-h ", maxRange: "300mm ", maxCapacity: "30 rounds ", 
		     		   firing: "semi, burst, auto ", Damage: 30, sound: "bang bang!!", score: 25 },
             hitPoints: 0,
             score: 0,

             travelTo: function (map) {
             	    console.log(nate.gamerTag + "selects " + map + "to joins TnA for some killing ")
             },
             makeEveryoneRich: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and show everyone how rich we are. " )
             }
};



var baddies = { gamerTag:  ["Airdemon ", "AfricanAids ", "Pontenail jew "],
				rank:  	   ["Captain ", "Corporal", "Colonel" ],
				specialty: ["Support ", "Engineer ", "Assualt ", "Medic"],
				weapon:    {weaponType: "G3", maxRange: "350mm ", maxCapacity: "30 rounds ",
							firing: "semi and auto ", damage: 35, sound: "crack crack ", score: 25 },

				hitPoints: 0,
                score: 0,
                spreadCommunism: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and defeat the capitalist pigs. " )
                }

};


var vehicile = { tanks: [m1Abrams = {name: 				"M1 m1Abrams",
									topSpeed:      		"56 KM/H",
									driverWeapons: 		"main canon and coaxial LMG or HMG",
									passengerWeapons: 	"heavy machine gun",
									ammunition: 		"unlimited ",
									damage: 			100
									},


		       	    	 t90      = {name: 				"T90 ",
		       	    	 			 topSpeed:      	"56 KM/H",
									 driverWeapons: 	"main canon and coaxial LMG or HMG",
									 passengerWeapons: 	"heavy machine gun",
									 ammunition: 		"unlimited",
									 damage: 			100
									}		
						],			
		 helicpoters: [aH64Apache = {name:      		"Apache ",
		   							   seats:     		"gunner and  pilot ",
									   topSpeed: 		"330 KM/H",
        							   standardWeapons: "rockets and Gatling gun",
		   					    	   damage: 			100
		   					    	  }, 
		   			   Mi28       = {name:              "Mi 28 ",
		   				 			   seats:           2,
									   topSpeed:        "320 KM/H ",
                                       standardWeapons: " rockets and Gatling gun ",
   									   damage: 			100
   									} 
   						],

   		   transports:  [growler  = {name:       "Growler ",
 						 			 topSpeed:   "75 KM/H ",
								     armament:   ".50 cal machine gun ",
   									 seats:       3,
            						 damage:      50
            						 },
            			 vdvBuggy = {name:        "VDV Buggy ",
            			             topSpeed:    "75 KM/H ",
									 armament:    ".50 cal machine gun ", 
									 seats:        3, 
				           			 damage:  	   50
				           			 }						 		               
				        ]
				 
};

console.log(vehicile, "\n", john, "\n", nate, "\n", brandon, "\n", baddies);


