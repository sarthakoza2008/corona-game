var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cc2ebe8c-413a-456b-8dcd-25afc78587ec","fdb0c8b9-7702-4e52-a455-301a95203f51","5a99dc6c-287b-4337-b625-586e0c6f3564","f6e36b99-571d-4ba6-bed2-31e5f0e4f710","6427cbd9-8f69-40fc-8bea-3bf4f0d72e3a","ba800710-932b-4e79-917e-62c84b94e311"],"propsByKey":{"cc2ebe8c-413a-456b-8dcd-25afc78587ec":{"name":"virus1","sourceUrl":null,"frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"mZp698m3A6LWiuhpmAtred.ZdG0e42Ij","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/cc2ebe8c-413a-456b-8dcd-25afc78587ec.png"},"fdb0c8b9-7702-4e52-a455-301a95203f51":{"name":"virus2","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"5a99dc6c-287b-4337-b625-586e0c6f3564":{"name":"virus3","sourceUrl":"assets/api/v1/animation-library/gamelab/BnjDVhiSCi1qxzxKHZpbeYSo.y5kz0tq/category_germs/virus02_04.png","frameSize":{"x":400,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"BnjDVhiSCi1qxzxKHZpbeYSo.y5kz0tq","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BnjDVhiSCi1qxzxKHZpbeYSo.y5kz0tq/category_germs/virus02_04.png"},"f6e36b99-571d-4ba6-bed2-31e5f0e4f710":{"name":"mas.jpg","sourceUrl":null,"frameSize":{"x":265,"y":190},"frameCount":1,"looping":true,"frameDelay":12,"version":"5rMphWemV7ortfzltEooke1SYmbgYG8I","loadedFromSource":true,"saved":true,"sourceSize":{"x":265,"y":190},"rootRelativePath":"assets/f6e36b99-571d-4ba6-bed2-31e5f0e4f710.png"},"6427cbd9-8f69-40fc-8bea-3bf4f0d72e3a":{"name":"kid","sourceUrl":"assets/api/v1/animation-library/gamelab/SCx.ulQQFsDzgGPaGZ0rdecmoiBgLn4v/category_people/kid_14_side.png","frameSize":{"x":180,"y":291},"frameCount":1,"looping":true,"frameDelay":2,"version":"SCx.ulQQFsDzgGPaGZ0rdecmoiBgLn4v","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":291},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SCx.ulQQFsDzgGPaGZ0rdecmoiBgLn4v/category_people/kid_14_side.png"},"ba800710-932b-4e79-917e-62c84b94e311":{"name":"senitizer.jpg_1","sourceUrl":"assets/v3/animations/Z8fd7VSp57TSj0qaavrzXDk7GxRbYeHjuwWLph_ALrM/ba800710-932b-4e79-917e-62c84b94e311.png","frameSize":{"x":1024,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"VpWDrLTMi122V3H3JbuWlfzAAhiLBv8W","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":512},"rootRelativePath":"assets/v3/animations/Z8fd7VSp57TSj0qaavrzXDk7GxRbYeHjuwWLph_ALrM/ba800710-932b-4e79-917e-62c84b94e311.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

showMobileControls(true,true, true, false);

var player = createSprite(27,33,15,15);
player.shapeColor = ("darkblue");
player.setAnimation("kid");
player.scale = 0.1;

var virus1 = createSprite(210,78);
virus1.setAnimation("virus1");
virus1.scale = 0.1;
virus1.velocityY = 4; 

var virus2 = createSprite(80,160);
virus2.setAnimation("virus2");
virus2.scale = 0.1;
virus2.velocityX = 2;

var virus3 = createSprite(200,365);
virus3.setAnimation("virus3");
virus3.scale = 0.1;
virus3.velocityY = 1;

var senitizer = createSprite(322,37);
senitizer.setAnimation("senitizer.jpg_1");
senitizer.scale = 0.1;

var mask = createSprite(313,360);
mask.setAnimation("mas.jpg");
mask.scale = 0.2;

var wall1 = createSprite(5, 55, 10, 700);
wall1.shapeColor = ("red");

var wall2 = createSprite(10, 5, 800, 10);
wall2.shapeColor = ("red");

var wall3 = createSprite(395, 55, 10, 800);
wall3.shapeColor = ("red");

var wall4 = createSprite(232, 395, 800, 10);
wall4.shapeColor = ("red");

var wall5 = createSprite(152,60,10,190);
wall5.shapeColor = ("blue");

var wall6 = createSprite(220,150,130,10);
wall6.shapeColor = ("blue");

var wall7 = createSprite(120,200,130,10);
wall7.shapeColor = ("blue");

var wall8 = createSprite(220,253,10,100);
wall8.shapeColor = ("blue");

var wall9 = createSprite(174,300,100,10);
wall9.shapeColor = ("blue");

var wall10 = createSprite(340,230,100,10);
wall10.shapeColor = ("blue");

var wall11 = createSprite(55, 340, 10, 100);
wall11.shapeColor = ("blue");

var wall12 = createSprite(315,310,150,10);
wall12.shapeColor = ("blue");

var wall13 = createSprite(340,73,100,10);
wall13.shapeColor = ("blue");

var wall14 = createSprite(45,125,70,10);
wall14.shapeColor = ("blue");

var wall15 = createSprite(170,330,10,50);
wall15.shapeColor = ("blue");

var wall16 = createSprite(385,350,10,80);
wall16.shapeColor = ("blue");

var wall17 = createSprite(280,200,130,10);
wall17.shapeColor = ("blue");

var wall18 = createSprite(242,347,10,85);
wall18.shapeColor = ("green");

var tries = 5;

function draw() {
  
  background("black");

if (keyDown("RIGHT_ARROW")) {
player.velocityX=2;
player.velocityY=0;
}

if (keyDown("LEFT_ARROW")) {
player.velocityX=-2;
player.velocityY=0;
}

if (keyDown("UP_ARROW")) {
player.velocityX=0;
player.velocityY=-2;
}

if (keyDown("DOWN_ARROW")) {
player.velocityX=0;
player.velocityY=2;
}
  
if(player.isTouching(senitizer)){
  wall18.destroy();
}

if(player.isTouching(wall1)||player.isTouching(wall2)||player.isTouching(wall3)||player.isTouching(wall14)||player.isTouching(wall5)||player.isTouching(wall6)||player.isTouching(wall7)||player.isTouching(wall8)||player.isTouching(wall9)||player.isTouching(wall10)||player.isTouching(wall11)||player.isTouching(wall12)||player.isTouching(wall13)||player.isTouching(wall4)||player.isTouching(wall5)||player.isTouching(wall16)||player.isTouching(wall17)||player.isTouching(wall18)){
  player.x = 27;
  player.y = 33;
  player.velocityX = 0;
  player.velocityY = 0;
  tries = tries-1;
}

  if (player.isTouching(virus1)||player.isTouching(virus2)||player.isTouching(virus3)){
  player.x = 27;
  player.y = 33;
  player.velocityX = 0;
  player.velocityY = 0;
  tries = tries-1;
  }
  
  if (player.isTouching(mask)) {
    fill("yellow");
    text("YOU WIN", 65, 222);
  }
  
  if (tries === 0){
    background("yellow");
    
    textSize(20);
    fill("lightblue");
    text("GAME OVER!!!...Press SPACE to restart",20,180);
    
    if (keyDown("RIGHT_ARROW")) {
    player.velocityX = 0;
    player.velocityY = 0;
}

    if (keyDown("LEFT_ARROW")) {
    player.velocityX = 0;
    player.velocityY = 0;
    }

    if (keyDown("UP_ARROW")) {
    player.velocityX = 0;
    player.velocityY = 0;
    }
    
    if (keyDown("DOWN_ARROW")) {
    player.velocityX= 0;
    player.velocityY= 0;
    }
    
    virus1.velocityY = 0;
    virus2.velocityX = 0;
    virus3.velocityY = 0;
  }
  if (keyDown("space")&&tries === 0) {
    reset();
  }
  createEdgeSprites();
  player.bounceOff(edges);
  
  virus1.bounceOff(wall2);
  virus1.bounceOff(wall6);
  
  virus2.bounceOff(wall6);
  virus2.bounceOff(wall1);
  
  virus3.bounceOff(wall4);
  virus3.bounceOff(wall9);
  
  fill("yellow");
  textSize(13);
  text("You must first touch the senitizer....", 10, 230);
  text("to destroy the green wall", 10, 270);
  
  fill("red");
  textSize(15);
  text("tries:", 20, 86);
  text(tries, 60, 86);
  drawSprites();
}

function reset(){
  
if (keyDown("RIGHT_ARROW")) {
player.velocityX=2;
player.velocityY=0;
}

if (keyDown("LEFT_ARROW")) {
player.velocityX=-2;
player.velocityY=0;
}

if (keyDown("UP_ARROW")) {
player.velocityX=0;
player.velocityY=-2;
}

if (keyDown("DOWN_ARROW")) {
player.velocityX=0;
player.velocityY=2;
}
  virus1.velocityY = 4;
  virus2.velocityX = 2;
  virus3.velocityY = 1; 

   wall18.x = 242;
   wall18.y = 347;
   wall18.width = 10;
   wall18.height = 85;
  
  
  tries = 5;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
