class Plinko{
    constuctor(x,y,r){
        var options={
            isStatic:true
        }
        this.body=Bodies(x,y,this.r,options);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        this.body=Bodies.circle(x,y,this.r,options);
        fill("white");
        circle(pos.x,pos.y,this.r);
    }
};