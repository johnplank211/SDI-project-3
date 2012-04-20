//John Planak 
//
//Just another day "Battlefield 3 style"


var terrian      = "urban ";
var time         = "2400";
var baddies      = "Russians ";
var map          = "Caspian Boarder ";    
var friendlies   = "Americans ";
var flags = ["A flag ", "B flag ", "C flag ", "D flag " ];
var jew = baddies.gamerTag;

var john = { gamerTag:  "cackmongerr ", 
			 rank:      "Staff sergeant ", 
			 specialty: "Support ",
			 motto:      "SPOON!!! ",
			 weapon: { weaponType: "Doa-12 ", maxRange: "50mm ", maxCapacity: "12 rounds ", 
			 		   firing: "semi auto ", damage: 50, sound: "boom boom!! " },
                     
                hitPoints: 300,
                score: 0,
     			promote: function (newRank) {
             	    this.rank = newRank;
             },
             makeEveryoneRich: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and show everyone how rich we are. " )
             },

             getRank: function () {
             		return this.rank;
             }
};


/*john.travelTo("Krager Island");*/
john.makeEveryoneRich(flags[2]);
console.log(john.getRank());
john.promote("Sergeant First Class");

//object 2
var brandon = { gamerTag:  "dmusicstud ",
				rank:      "sergeant ",
				specialty: "Assault ",
				motto:      "that faggetty fag bear!! ",
			    weapon: { weaponType: "F2000 ", maxRange: "500mm ", maxCapacity: "30 rounds ",
			              firing: "semi, burst, auto ", damage: 25, Sound: "bang bang ", score: 25 },
                                                      
                hitPoints: 300,
                score: 0,
				travelTo: function (map) {
             	    console.log(brandon.gamerTag + "selects " + map + "to joins TnA for some killing ")
             },
             	makeEveryoneRich: function (flag) {
                	console.log("Lets go and capture " + flag + "flag and show everyone how rich we are. " )
             },

};                           

brandon.travelTo("Krager Island");
brandon.makeEveryoneRich(flags[2]);

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

nate.travelTo("Krager Island");
nate.makeEveryoneRich(flags[2]);

var tna = [john.gamerTag, brandon.gamerTag, nate.gamerTag];


//object Json 4

function triggerBaddies (x) {
	console.log("We are the mighty " + x + "clan.");
};

triggerBaddies(jsonBaddies.clan);

     function spreadCommunism (flag) {
            console.log("Lets go and capture " + flag + "flag and defeat the capitalist pigs. " )
};





//object 5
var vehicle = { tanks: [m1Abrams = {name: 				"M1 m1Abrams",
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
				        		moblieDeath: function (x, damage, target) {				        		 
				        		 	 if (x * damage < target)  {
				        		 	 		console.log("keep shooting he has only ", target - x * damage , "left")
				        				} else {
				        					console.log("die bastards ")
				        				}
				        		 	 	
				        		}
};

vehicle.moblieDeath(2, vehicle.helicopters[0].damage, john.hitPoints);



function Attack(attacker, target, weapon) {
	console.log("John is attacking " + jsonBaddies.gamerTag[0]);
	console.log(attacker.gamerTag + "'s weapon goes " + weapon.sound + "sound while attacking " + target.gamerTag[0]);
	target.hitPoints -= weapon.damage;
}



while (baddies.hitPoints > 0)
{
	Attack(john, baddies, john.weapon)
	console.log("Target now has " + jsonBaddies.hitPoints + " hitPoints");
		if (baddies.hitPoints === 0 ) {
			console.log("ha ha ha " + john.motto)
		}
};


function flagAttack (x) {
	
		for (var flagsIndex = 0; flagsIndex < flags.length; flagsIndex++) {
			console.log("Keep fighting " + x + " we have " + flags[flagsIndex] + " to go!! ")
        }		if (flagsIndex > 0) {
						console.log("We won TnA style, Coke and pizza for everyone!!") 
					}
};
 
flagAttack(tna);
Attack(john, jsonBaddies, john.weapon);

var flagNames = ["A. Gas station flag ", "B. Office flag ", 
   				 "C. Construction flag ", "D. Dock flag " ],
   	minutesPerFlag = [ 30 , 15, 60, 60  ];
for (var flagNumber = 0; flagNumber < flagNames.length; flagNumber++) {
	 var flagName = flagNames[flagNumber],
	 	 minutesThisFlag = minutesPerFlag[flagNumber];
	 console.log("Start attacking " + flagName + " for "
	 	+ minutesThisFlag + " minutes ");
	 for (var minutes = 0; minutes < minutesThisFlag; minutes +=20) {
	 	var minutesRemain = minutesThisFlag - minutes;
	 	console.log(minutes + " done, " + minutesRemain + " to go! ");
		
	 }
	 console.log("We finished the " + flagName + ".");
};

var team = {members: "", 
	clan: function (x) {
			console.log("We are the mighty \"Tiny Ninja Ants\"" + x + "Clan ")
	}
};

team.clan(tna);