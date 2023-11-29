console.log("Robot is alive ðŸ¤–");

const myRobot = document.getElementById("robot");
const mouth = document.getElementById("mouth");

myRobot.addEventListener("click", function(){
    //alert("Dont't touch me");
   let utterance = new SpeechSynthesisUtterance("Feed me electricity!");
   speechSynthesis.speak(utterance);

    //mouth.style.boxShadow = " 0px 0px 10px 5px #ff00006e";
    //mouth.style.border = " 2px solid red";
    //mouth.style.fill = "aqua";

    mouth.classList.add("blink");

    this.classList.add("shake");
    setTimeout(function(){
        //do stuff
        myRobot.classList.remove("shake");
        mouth.classList.remove("blink");

    }, 1000); //1000 = 1 second

})

/**
 * SOUNDS
 */
const myRobotSound = new Audio("sounds/little-robot.mp3");


/**
 * Move Robot
 */

let robotX = 0;
let robotY = 0;

function moveRobot() {
    //myRobot.style.transform = "translateX(" + robotX + "px) translateY(" + robotY + "px)";
    myRobot.style.transform = `translateX(${robotX}px) translateY(${robotY}px)`;
    myRobotSound.play();
} 

function moveLeft() {
    robotX -= 200; // means robotX = robotX - 20
    moveRobot();
}
function moveRight() {
    robotX += 200; // means robotX = robotX + 20
    moveRobot();
}
function moveUp() {
    robotY -= 200;
    moveRobot();
}
function moveDown() {
    robotY += 200;
    moveRobot();
}

/**
 * Keyboard control
 */

 document.addEventListener("keydown", (e) => {
    e = e || window.event;
    
    if (e.key === "ArrowUp") {
      console.log("up arrow pressed");
      moveUp();
    } else if (e.key === "ArrowDown") {
      console.log("down arrow pressed");
      moveDown();
    } else if (e.key === "ArrowLeft") {
      console.log("left arrow pressed");
      moveLeft();
    } else if (e.key === "ArrowRight") {
      console.log("right arrow pressed");
      moveRight();
    }
  });

/**
 * Virtual buttons
 */
const leftBtn = document.getElementById("move-left"); 
const rightBtn = document.getElementById("move-right"); 
const upBtn = document.getElementById("move-up"); 
const downBtn = document.getElementById("move-down"); 

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);
upBtn.addEventListener("click", moveUp);
downBtn.addEventListener("click", moveDown);


/**
 * Game update loop
 */

let robotCoordX;
let robotCoordY;
let object1CoordX;
let object2CoordX;

const myOven = document.getElementById("oven");

setInterval(() => {
  // console.log("update loop is running")
  robotCoordX = myRobot.getBoundingClientRect().x;
  robotCoordY = myRobot.getBoundingClientRect().y;

  //optional: move robot coordinates to its center
  robotCoordX += 137; // half the width of the robot
  robotCoordY += 149; // half the height of the robot
  
  object1CoordX = myOven.getBoundingClientRect().x;
  object1CoordY = myOven.getBoundingClientRect().y;

  if(
       (robotCoordX >= object1CoordX && robotCoordX <= object1CoordX + 208) 
    && (robotCoordY >= object1CoordY && robotCoordY <= object1CoordY + 244)
    ) {
    console.log("Hit ðŸ’¥");
    object1Action();
  }  
}, 500);

const ovenSound1 = new Audio("sounds/metallic-clang-100473.mp3");
let ovenIsMessedUp = false;
const ovenDoor = document.getElementById("door");

function object1Action() {
  
  if(!ovenIsMessedUp) { 
    ovenIsMessedUp = true;
    ovenSound1.play();
    myOven.style.transform = "translateX(-20px) rotate(2deg) scale(0.9)";
    ovenDoor.style.fill = "yellow";
  }

}
