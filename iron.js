class iron{
        constructor(x,y)
        {
        // assign options to the rubber ball
        var options={
            restitution:0.8,
            friction:3,
            density:13
        }
            this.x=x;
            this.y=y;
            
            this.body=Bodies.rectangle(this.x, this.y, 50,80, options)
            
            this.width=50;
            this.height=80

            World.add(world, this.body);
    
        }
        display()
        {
                var rubberpos=this.body.position;		
                push()
                translate(rubberpos.x, rubberpos.y);
                rectMode(CENTER)
                strokeWeight(4);
                stroke("black");
                fill("grey");
                //draw the ellipse here to display the rubber ball
    rect(0,0,this.width,this.height)
                pop()
        }
    
    }