
var g1,plinkos,divisions,divisionHeight,particles;

function setup() {
 var canvas= createCanvas(480,800);
 
}

  var particles=[];
  var plinkos=[];
  var divisions=[];
  
  var divisionHeight=300;

function draw() {
  background(255,255,255);  
  
  for(var k=0;k<=width;k=k+80){
    divisionHeight.push(new Division(k,height*divisionHeight/2,10,divisionHeight));
  }
  
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  
  if(frameCount%60===3){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  
  for(var k=0;k<division.length;k++){
    particles[k].display();
  }
 

  drawSprites();
  
}

