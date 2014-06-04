
  var levelData = { 
     1:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,1,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,0,0,1,1,1,0,0,0]],
     2:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,1,0,0],
          [0,0,0,1,0,0,0,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0]] };

  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 23, h: 18, cls: Alien, frames: 2 },
    'alien2': { sx: 0,  sy: 18, w: 23, h: 18, cls: Alien, frames: 2 },
    'player': { sx: 0,  sy: 36, w: 26, h: 17, cls: Player },
    'missile': { sx: 0,  sy: 86, w: 3,  h: 14, cls: Missile }
  }

  function startGame() {
    var screen = new GameScreen("Alien Invaders","Press Space To Start",                                            // this is what is shown in the start up screen 
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }

  function endGame() {
    var screen = new GameScreen("Game Over","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


  function winGame() {
    var screen = new GameScreen("You Win!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }

function endGame() {
    var screen = new GameScreen("You Lose","Press Space To Restart", // this is what is presented when you get hit by a missle
                                
                                function() {
        Game.loadBoard(new GameBoard(1));

        score = 0;
        document.getElementById('score').innerHTML="Score : " + score;  });
        
        Game.loadBoard(screen);
        
    }
    
    
    function winGame() {
        var screen = new GameScreen("You Win","Press Space To Restart",  // this is shown when you have completed all the levels of the game
                                    
                                    function() {
        Game.loadBoard(new GameBoard(1));
                                        
                                        score = 0;
                                        
                                    document.getElementById('score').innerHTML="Score : " + score;  
                                    });
        
        Game.loadBoard(screen);
        
    }





  $(function() {
    GameAudio.load({ 'fire' : 'media/boom.mp3', 'die' : 'media/gun.mp3' }, //game audio sounds
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



