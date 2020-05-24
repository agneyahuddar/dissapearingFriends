const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = 'sprites/bg.png'
function preload() { 
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    block8 = new Pig(630, 235, 50, 60);
    block9 = new Pig(660, 235, 50, 60);
    block10 = new Pig(690, 235, 50, 60);
    block11 = new Pig(720, 235, 50, 60);
    block12 = new Pig(750, 235, 50, 60);
    block13 = new Pig(660, 195, 50, 60);
    block14 = new Pig(690, 195, 50, 60);
    block15 = new Pig(720, 195, 50, 60);
    block16 = new Pig(690, 155, 50, 60);

    bird = new Bird(200,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    ground = new Ground(690, 300, 270, 20);
}

function draw(){
    if(backgroundImg){

   background(backgroundImg);
    }
    // textSize(15);
    // text("SCORE = " + score, width-300, 50);
    Engine.update(engine);
    strokeWeight(4);
    //box1.display();
    //box2.display();
    ground.display();
    
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

     bird.display();
     platform.display();
     //log6.display();
    // slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

async function getTime(){

    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    var responseJSON = await response.json();
    console.log(responseJSON.datetime);
    var hour = responseJSON.datetime.slice(11, 13);
    console.log(hour);
    if(hour>=6 && hour <= 19){

        bg = 'sprites/bg.png';

    }

    else{

        bg = 'sprites/bg2.jpg';

    }
    
    backgroundImg = loadImage(bg);
}