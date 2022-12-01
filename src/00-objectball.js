// A function must return
// step 1:  Building the object
function gameObject() {
    const home = {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoes: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
  
        "Reggie Evans": {
          number: 30,
          shoes: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
  
        "Brook Lopez": {
          number: 11,
          shoes: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
  
        "Mason Plumlee": {
          number: 1,
          shoes: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
  
        "Jason Terry": {
          number: 31,
          shoes: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    };
    const away = {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoes: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
  
        "Bismak Biyombo": {
          number: 0,
          shoes: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
  
        "DeSagna Diop": {
          number: 11,
          shoes: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
  
        "Ben Gordon": {
          number: 8,
          shoes: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
  
        "Brendan Haywood": {
          number: 33,
          shoes: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    };
    const homeAway = {
      home,
      away
    };
    return homeAway;
  } 
  
  console.log(gameObject());
  
  // step 2 : Building Functions
  
  // create function for home team then `console.log(homeTeamName())`
  
  function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }

  console.log(homeTeamName());
  
  
  
  // create function for away team then `console.log(awayTeamName())`
  
  function awayTeamName() {
    let object = gameObject()
    return object['away']['teamName']
  }

  console.log(awayTeamName())
  
