// Game States
// WIN - Player robot has defeated all enemy robots
//      *Fight all enemy robots
//      *Defeat each enemy robot
// LOSE - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
        
    while (enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            
        if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
            enemyHealth = enemyHealth - playerAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining.");

            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.")
            }
        
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining.");

            // Check player's health
            if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            }
            else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.")
            }
        }

        else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            var confirmSkip = window.confirm("Are you sure you want to skip?");
        
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight.");
                playerMoney = playerMoney - 2;
            }
            else {
                fight();
            }
        } else {
            window.alert("You must enter a valid response. Please try again!");
        }
    }          
}
         
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    fight(enemyNames[i]);
}