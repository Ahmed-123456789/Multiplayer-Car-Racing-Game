class Game{
    constructor(){
        
    }
    getState(){
        var gameStateref = database.ref('GameState')
        gameStateref.on("value", function(data){
            GameState=data.val()
        })
        
    }
    update(state){
        database.ref('/').update({
            GameState: state
        })
    }
    async start(){
        if(GameState == 0){
            player = new Player()
            var Playercountref = await database.ref('PlayerCount').once("value")
            if(Playercountref.exists()){
                PlayerCount  = Playercountref.val()
                player.getCount()
            }
           
            form = new Form()
            form.display()
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("GameStart", 120, 100);
        Player.getPlayerInfo()
        if(allPlayers!== undefined){
            var displayposition = 130
            for(var plr in allPlayers){
                if(plr == "player" +player.index)
                fill("red");
                else
                fill("black")
                
            
            displayposition+=20
            textSize(15);
            text(allPlayers[plr].name+":"+allPlayers[plr].distance, 120, displayposition)
        }
    }
    if(keyIsDown(UP_ARROW)&& player.index!==null){
        player.distance +=50
        player.update()
    }
}
}