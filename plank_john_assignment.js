//John Planak 
//
//Just another day "Battlefield 3 style"


var terrian      = "urban ";
var time         = "2400";
var baddies      = "Russians ";
var map          = "Kharg Island ";    
var friendlies   = "Americans ";

var john = { gamerTag:  "cackmongerr ", 
			 rank:      "Staff Sargeant ", 
			 specialty: "Support ",
			 motto:      "SPOON!!! ",
			 weapon: { weaponType: "Doa-12 ", maxRange: "50mm ", maxCapacity: "12 rounds ", 
			 		   firing: "semi auto ", damage: 50, sound: "boom boom!! " },
                     
                hitPoints: 300,
                score: 0,
     			travelTo: function (map) {
             	    console.log(nate.gamerTag + "selects " + map + "to joins TnA for some killing ")
             },
             makeEveryoneRich: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and show everyone how rich we are. " )
             },

};
//object 2
var brandon = { gamerTag:  "dmusicstud ",
				rank:      "Sargeant ",
				specialty: "Assualt ",
				motto:      "that faggetty fag bear!! ",
			    weapon: { weaponType: "F2000 ", maxRange: "500mm ", maxCapacity: "30 rounds ",
			              firing: "semi, burst, auto ", damage: 25, Sound: "bang bang ", score: 25 },
                                                      
                hitPoints: 300,
                score: 0,
				travelTo: function (map) {
             	    console.log(nate.gamerTag + "selects " + map + "to joins TnA for some killing ")
             },
             	makeEveryoneRich: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and show everyone how rich we are. " )
             },

};                           

// Object 3
var nate = { gamerTag:   "eurofreak ",
			 rank:       "Corporal ",
			 specialty:  "Assault ",
			 motto:       "stupid 12 year olds!! ",
		     weapon: { weaponType: "Scar-h ", maxRange: "300mm ", maxCapacity: "30 rounds ", 
		     		   firing: "semi, burst, auto ", Damage: 30, sound: "bang bang!!", score: 25 },
             hitPoints: 300,
             score: 0,

             travelTo: function (map) {
             	    console.log(nate.gamerTag + "selects " + map + "to joins TnA for some killing ")
             },
             makeEveryoneRich: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and show everyone how rich we are. " )
             },

};


var tna = [john, brandon, nate];

//object 4
var baddies = { gamerTag:  ["Airdemon ", "AfricanAids ", "Potenial jew "],
				rank:  	   ["Captain ", "Corporal", "Colonel" ],
				specialty: ["Support ", "Engineer ", "Assualt ", "Medic"],
				weapon:    {weaponType: "G3", maxRange: "350mm ", maxCapacity: "30 rounds ",
							firing: "semi and auto ", damage: 35, sound: "crack crack ", score: 25 },

				hitPoints: 300,
                score: 0,
                spreadCommunism: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and defeat the capitalist pigs. " )
                },

};


var jew = baddies.gamerTag;
//object 5
var vehicile = { tanks: [m1Abrams = {name: 				"M1 m1Abrams",
									topSpeed:      		"56 KM/H",
									driverWeapons: 		"main canon and coaxial LMG or HMG",
									passengerWeapons: 	"heavy machine gun",
									ammunition: 		"unlimited ",
									damage: 			100,
									hitPoints:          1000
									},


		       	    	 t90      = {name: 				"T90 ",
		       	    	 			 topSpeed:      	"56 KM/H",
									 driverWeapons: 	"main canon and coaxial LMG or HMG",
									 passengerWeapons: 	"heavy machine gun",
									 ammunition: 		"unlimited",
									 damage: 			100,
									 hitPoints:         1000
									}		
						],		
			
 			 helicopters: [aH64Apache = {name:      		"Apache ",
		   							   seats:     		"gunner and  pilot ",
									   topSpeed: 		"330 KM/H",
        							   standardWeapons: "rockets and Gatling gun",
		   					    	   damage: 			100,
		   					    	   hitPoints:       750
		   					    	  }, 
		   			   Mi28       = {name:              "Mi 28 ",
		   				 			   seats:           2,
									   topSpeed:        "320 KM/H ",
                                       standardWeapons: " rockets and Gatling gun ",
   									   damage: 			100,
   									   hitPoints:       750
   									}   								
   						],

   		   transports:  [growler  = {name:       "Growler ",
 						 			 topSpeed:   "75 KM/H ",
								     armament:   ".50 cal machine gun ",
   									 seats:       3,
            						 damage:      50,
            						 hitPoints:   500
            						 },
            			 vdvBuggy = {name:        "VDV Buggy ",
            			             topSpeed:    "75 KM/H ",
									 armament:    ".50 cal machine gun ", 
									 seats:        3, 
				           			 damage:  	   50,
				           			 hitPoints:    500
				           			 },				 		               
				        ],
				        		moblieDeath: function (x, damage) {				        		 
				        		 	 if (x * damage < john.hitPoints)  {
				        		 	 		console.log("keep shooting he has only ", john.hitPoints - x * damage , "left")
				        				} else {
				        					console.log("die bastards ")
				        				}
				        		 	 	
				        		}
};

vehicile.moblieDeath(3, vehicile.helicopters[0].damage)

console.log(vehicile.helicopters[0].hitPoints + john.hitPoints);

function Attack(attacker, target, weapon)
{
	console.log(attacker.gamerTag + "'s weapon makes a " + weapon.sound + "sound while attacking " + target.gamerTag[0]);
	target.hitPoints -= weapon.damage;
}


console.log("John is attacking " + baddies.gamerTag[0]);
while (baddies.hitPoints > 0)
{
	Attack(john, baddies, john.weapon)
	console.log("Target now has " + baddies.hitPoints + " hitpoints");
		if (baddies.hitPoints === 0 ) {
			console.log("ha ha ha " + john.motto)
		}
};

function flagAttack (x) {
	var flags = ["A flag ", "B flag ", "C flag ", "D flag " ];
		for (var flagsIndex = 0; flagsIndex < flags.length; flagsIndex++) {
			console.log("Keep fighting " + x + " we have " + flags[flagsIndex] + " to go!! ")
}				
				return "We won TnA style, Coke and pizza for everyone!!"; 

};

flagAttack(tna);



