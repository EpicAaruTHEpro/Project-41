const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops = [];
var umbrella;
var maxDrops = 3;
var thunder;
var thunder1, thunder2, thunder3, thunder4;
var rando;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   canvas = createCanvas(400,800);
   engine = Engine.create();
   world = engine.world;

   thunder = createSprite(200, 100, 200, 100);
   thunder.addImage(thunder1);
   thunder.scale = 0.5;
   
   umbrella = new Umbrella(200, 500);
   Engine.run(engine);
}

function draw(){
    background(0);
    
    for (var i =0; i<maxDrops; i++) {
        drops.push(new Drop(random(0,400), random(0,400)));
    }

    for (var k = 0; k<drops.length; k++) {
        drops[k].display();
    }

    rando = Math.round(random(1,4));
    //console.log(rando);
    if (frameCount % 100 === 0) {
        thunder = createSprite(200, 100, 200, 100);
        thunder.addImage(thunder1);
        thunder.scale = 0.5;
        switch (rando) {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
        }
    }

    if (frameCount % 100 === 12) {
        thunder.destroy();
    }
    umbrella.display();
    drawSprites();
}   

