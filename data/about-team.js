
var data = [

  [ "MEGAN MCKENNA",
    "PRESIDENT",
    ["MEGAN STUDIED MUSIC FROM FIRST GRADE UP THROUGH HER SOPHOMORE YEAR OF COLLEGE, FULLY EXPECTING TO EVENTUALLY WORK IN THE MUSIC INDUSTRY. BUT WHEN INTRODUCED TO A PROFESSIONAL VIDEO CAMERA BY A FRIEND ON CAMPUS, SHE QUICKLY SWITCHED HER FOCUS TO TECHNICAL JOURNALISM. AFTER LEARNING HOW TO DISCOVER, TELL, AND EDIT A STORY, SHE MOVED TO SAN FRANCISCO TO MAKE IT HER CAREER.","SHE NOW APPLIES HER MANY YEARS OF EXPERIENCE TOWARDS EVERY PROJECT THAT COMES THROUGH THE DOOR.","IN HER SPARE TIME MEGAN CATCHES UP IN MOVIES AND MUSIC, HANGS OUT WITH HER DAUGHTER AND HUSBAND, AND THEIR FUR BABY COOKIE."],
    "megan@totalmediagroup.com",
    "megan"
  ],

  [ "JACK HSU",
    "CHIEF OPERATING OFFICER",
    ["JACK, A VIRTUAL PICASSO OF VIDEO AND MEDIA ENGINEERING, BEGAN FREELANCING FOR TMG AS CHIEF ENGINEER IN THE EARLY ‘90S. HE REPAIRED AND MAINTAINED ANYTHING FROM MAC AND WINDOWS COMPUTERS TO BROADCAST VTR’S AND ALL TYPES OF VIDEO EDITING AND GRAPHICS SYSTEMS. HE DESIGNED AND ENGINEERED COMPLETE SYSTEMS. HE, ALONG WITH ALDO PANATTONI, FOUNDER, WAS AWARDED A PATENT FOR A NEW SYSTEM TO CREATE INSTANT VIDEO DUBS ON LOCATION.","IN 1999, JACK LEFT TMG TO DESIGN AND BUILD A BRAND NEW FACILITY FROM GROUND UP IN TEXAS.  BUT JACK REALIZED HE MISSED HIS HOME AT TMG, AND IN 2004 WAS WELCOMED BACK WITH OPEN ARMS. TMG HAS NEVER LOOKED OR RUN BETTER.","JACK ENJOYS WORKING AROUND THE HOUSE, STUDYING SCRIPTURES, AND IS A BIG FAN OF FIVE GUYS."],
    "jhsu@totalmediagroup.com",
    "jack"
  ],

  [ "STEVEN GREGORY",
    "CREATIVE DIRECTOR",
    ["STEVEN GREGORY (SG) BRINGS AN UNUSUALLY BROAD SET OF CREATIVE SKILLS TO TMG. THROUGHOUT HIS CAREER HE HAS SERVED AS DIRECTOR, PRODUCER, SHOOTER, EDITOR, DESIGNED AND BUILT SETS AND WORKED IN MUSIC AND AUDIO POST. HE HAS BEEN AN AWARD WINNING EDITOR CUTTING BOTH LONG FORM DOCUMENTARIES AND TELEVISION SPOTS FOR A WIDE RANGE OF COMMERCIAL CLIENTS. HE'S AT HOME IN A RECORDING STUDIO, AN EDIT BAY OR A ROOM FULL OF ANIMATORS.","AN ACCOMPLISHED MUSICIAN AND COMPOSER, STEVEN HAS WORKED ON BOTH SIDES OF THE GLASS WITH A NUMBER OF NOTABLE NATIONAL RECORDING ARTISTS.","STEVEN DEVELOPED HIS DESIGN SENSIBILITIES DURING YEARS OF PRINT WORK BEFORE AND AFTER THE DESKTOP REVOLUTION (CAN YOU SAY RAPIDOGRAPH?...HOW ABOUT RUBYLITH,...OR PERHAPS PACHE?) EVERY PROJECT IS ABOUT TELLING A COMPELLING STORY.","WHETHER IT'S A SIMPLE TECHNICAL EXPLAINER VIDEO OR A HIGH-CONCEPT WORK OF ART, HIS YEARS OF HANDS-ON EXPERIENCE IN SO MANY AREAS OF PRODUCTION GIVE HIM AN INNATE SENSE OF HOW BEST TO CRAFT THE STORY WITH THE HIGHEST DEGREE OF QUALITY WITHIN THE SCOPE OF THE PROJECT. AN AVID AMATURE HOCKEY PLAYER, STEVEN CAN BE FOUND (WHEN HE'S NOT AT TMG OR SLEEPING), PLAYING AT MANY OF THE BAY AREA HOCKEY RINKS.","HE SHOOTS...HE SCORES!"],
    "sg@totalmediagroup.com",
    "sg"
  ],

  [ "JEFF CASAGRANDE",
    "MEDIA PRODUCTION MANAGER",
    ["JEFF BRINGS CLOSE TO 20 YEARS OF MEDIA PRODUCTION EXPERIENCE TO TOTAL MEDIA GROUP, HANDLING MUCH OF THE COMPANY’S PROJECT MANAGEMENT NEEDS.","HE WORKS CLOSELY WITH ALL FACILITY AND REMOTE STAFF ON ALL PHASES OF PRODUCTION AND MANAGES A VARIETY OF PROJECTS AND CLIENTS AS WELL.","OFF THE JOB, JEFF LIKES TO SPEND TIME WITH HIS DAUGHTER, TRY NEW RESTAURANTS WITH HIS WIFE, PLAY BLUES HARMONICA, READING, JOGGING AND WATCHING OLD MOVIES."],
    "jeff@totalmediagroup.com",
    "jeff"
  ], 

  [ "PHIL SCHULTZ",
    "DIRECTOR OF CLIENT SERVICES",
    ["PHIL BRINGS 20 YEARS OF EXPERIENCE TO TMG, HAVING WORKED IN TELEVISION, FEATURE FILM AND CORPORATE VIDEO/MEDIA. BEGINNING HIS CAREER IN PRODUCTION, PHIL SEGUED INTO ACCOUNT MANAGEMENT AND EXECUTIVE PRODUCING WHEN HE LEFT ENTERTAINMENT TO EMPLOY HIS TALENTS IN HELPING CLIENTS TELL THEIR STORY.  WHEN NOT WORKING, PHIL ENJOYS ALL THAT NORTHERN CA HAS TO OFFER WITH HIS WIFE AND THEIR TWO KIDS."],
    "phil@totalmediagroup.com",
    "phil"
  ],


["",""]];

exports.load = function() {
  var rtrn = []; for (var i = 0; i < (data.length-1); i++) { rtrn[i] = data[i]; }
  return rtrn;
}