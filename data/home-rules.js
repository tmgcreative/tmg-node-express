
var data = [

  // [ "DO MORE THAN WHAT'S EXPECTED",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "TRY NEW THINGS",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "TEACH OTHERS WHAT YOU KNOW",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "MAKE WORK FUN",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "ALWAYS BE CREATING",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "MAKE YOUR OWN INSPIRATION",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "AVOID THE OBVIOUS",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "THE CLIENT IS PART OF THE TEAM",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "ACCEPT CREATIVE CRITICISM",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  [ "GOOD IDEAS DON'T REQUIRE A COMPUTER",
    "HOW TO DO REALLY GREAT WORK"
  ],

  [ "WE'RE ALL ROOKIES",
    "HOW TO DO REALLY GREAT WORK"
  ],

  // [ "COLLABORATE",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "ORGANIZE THE PROJECT",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "UNDERSTAND THE SCRIPT",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  [ "DON'T CONFUSE WIERD WITH CREATIVE",
    "HOW TO DO REALLY GREAT WORK"
  ],

  // [ "TRASH BAD CONCEPTS",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  [ "DON'T WASTE CHI",
    "HOW TO DO REALLY GREAT WORK"
  ],

  // [ "TAKE CHANCES",
  //   "HOW TO DO REALLY GREAT WORK"
  // ],

  // [ "EMBRACE FOREIGN IDEAS",
  //   "HOW TO DO REALLY GREAT WORK"
  //],

["",""]];

exports.load = function() {
  var rtrn = []; for (var i = 0; i < (data.length-1); i++) { rtrn[i] = data[i]; }
  return rtrn;
}