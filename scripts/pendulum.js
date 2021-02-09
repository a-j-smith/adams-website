var sketchProc = function(processingInstance) {
             with (processingInstance) {
                size(400, 400); 
                frameRate(30);
                angleMode = "Radians";
var pendulumArray = [];
var int = function(x){
    return x/1;
};
var Pendulum = function(x,y,theta,length,velocity){
    this.x = x;
    this.y = y;
    this.theta = theta;
    this.length = length;
    this.velocity = velocity;
};
Pendulum.prototype.updatePhysics = function() {
        var accel = 0.00;
        this.velocity+=-accel*sin(this.theta);
        this.velocity*=1;
        this.theta+=this.velocity;
        //println(-accel*sin(this.theta));
        
};
Pendulum.prototype.draw = function() {
    stroke(1);
    var x = this.x;
    var y = this.y;
    var theta = this.theta;
    var length = this.length;
    //line(x,y,x+sin(theta)*length,y+cos(theta)*length);
        noStroke();
        fill(0, 153, 173);
    ellipse(x + length * sin(theta),y + length * cos(theta),sqrt(length*5),sqrt(5*length));
};
var pNum=100;
var pendulum = new Pendulum(200,200,0,150,0);
    for(var i = 1; i < pNum; i++){
        pendulumArray.push(new Pendulum(200,200,PI/4+PI/(4*pNum)*i,pow(i,2)*(170/pow(pNum,2)),i/(10*pNum)));
    }
draw = function() {
    background(255, 255, 255);
    for(var i in pendulumArray){
       // pendulumArray[i].draw();
        var tempX1=pendulumArray[i].x+pendulumArray[i].length*sin(pendulumArray[i].theta);
        var tempY1=pendulumArray[i].y+pendulumArray[i].length*cos(pendulumArray[i].theta);
        if (i<pendulumArray.length-1){
            var tempX2=pendulumArray[int(i)+1].x+pendulumArray[int(i)+1].length*sin(pendulumArray[int(i)+1].theta);
            var tempY2=pendulumArray[int(i)+1].y+pendulumArray[int(i)+1].length*cos(pendulumArray[int(i)+1].theta);
            strokeWeight(1);
            stroke(0, 0, 0);
            line(tempX1,tempY1,tempX2,tempY2);
        }
        pendulumArray[i].updatePhysics();
        
        
       
    }
    ellipse(pendulumArray[1].theta*360+200,70,10,10);
};
}};

