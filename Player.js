class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null

    }
    getCount(){
        var getcount = database.ref('PlayerCount')
        getcount.on("value", function(data){
            PlayerCount=data.val();
        })

    }
    updateCount(count){
        database.ref('/').update({
            PlayerCount: count
        })
    }

    update(){
        var playerindex = "Players/Player"+ this.index
        database.ref(playerindex).set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerInfo(){
        var playerinforef = database.ref('Players')
        playerinforef.on("value", (data)=>{
            allPlayers = data.val()
        })
    }
}