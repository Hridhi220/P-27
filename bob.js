class Bob{
constructor(x,y,r){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':false
    }
    this.r = r;
    this.body = Bodies.circle(x,y,(r)/2,options);
    World.add(world,this.body);

}
display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    pop();

}
}