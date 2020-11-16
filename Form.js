class Form{
    constructor(){
        this.title = createElement('h2')
        this.input = createInput("name")
        this.button = createButton('Play')
        this.greeting = createElement('h2')
      
    }
    hide(){
        

        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()

    }
    display(){
       
        this.title.html("car racing game")
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2,displayHeight/2);
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        PlayerCount+=1
        player.index = PlayerCount
        player.update()
        player.updateCount(PlayerCount)
        this.greeting.html("Hello"+player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
    }

}