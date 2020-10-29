var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
    //console.log(enemyNames[0]);
    //console.log(enemyNames[1]);
    //console.log(enemyNames[2]);

    //console.log(enemyNames[i]);
    //console.log( i);
    //console.log(enemyNames[i] + " is at" +  i + " index ");
    //window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    // if player choses to fight, then fight
    //if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      //award player money for winning
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if enemy has health points, we keep fighting


    // if player choses to skip, then stop the loop

    // if no (false), ask question again by running fight() again
    // else {
    //fight();
    //}
  }
  //Games states
  // "WIN" - player robot has defeated all enemy-robots
  //*Fight all enemy robots
  //*Defeat each enemy robot
  //"LOSE - PLayer robot's health is zero or less
};

for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    //let the player know what round they are in, arrays start at 0
    window.alert ("Welcome to the Robot Gladiators! Round" + (i + 1));
  // call fight function with enemy-robot
  var pickedEnemyName = enemyNames[i];
  //reset enemyHealth before starting new fight
  enemyHealth = 50;
  //use debugger to pause script and see what's going ont
  //debugger
  //pass the pickedEnemyName variable into the fight function
  fight(pickedEnemyName);
}
}
