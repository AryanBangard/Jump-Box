var canvas;
var music;
var ball;
var surface1,surface2,surface3,surface4;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(700,570,200,15)
surface1.shapeColor='red'
surface2=createSprite(100,570,200,15)
surface2.shapeColor='yellow'
surface3=createSprite(300,570,200,15)
surface3.shapeColor='green'
surface4=createSprite(500,570,200,15)
surface4.shapeColor='pink'
ball=createSprite(700,30,20,20)
ball.velocityY=6;
ball.velocityX=4;
Edges=createEdgeSprites()
    

//createSprite(random(200,750))
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor='red'
}
if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
    ball.shapeColor='yellow'
}
if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
    ball.shapeColor='green'
}
if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
    ball.shapeColor='pink'
}

drawSprites()


    //add condition to check if box touching surface and make it box
}
