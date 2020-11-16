
var database;
var GameState = 0;
var PlayerCount;
var form, player, game;
var allPlayers;

function setup(){

    database = firebase.database();
    
    createCanvas(displayWidth-20, displayHeight-30);
   game = new Game()
   game.getState()
   game.start()

  
}

function draw(){
    background("white");
   
    if(PlayerCount == 4){
        game.update(1)
    }
if(GameState == 1){
    clear()
    game.play()
}

}
