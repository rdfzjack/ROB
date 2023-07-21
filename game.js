// Define the player's ability score and the difficulty level of the challenge
var playerAbilityScore = 5;
var challengeDifficulty = 7;

const difficulties = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Function to handle option selection
function selectOption(option) {
  if (option === 'A') {
    // Player chose option A, continue the game
    console.log("You selected Option A. Continue the game.");
    // Add your code here for what happens next when option A is chosen
  } else {
    // Player chose options B, C, or D, perform a skill check
    var success = performSkillCheck(playerAbilityScore, challengeDifficulty);
    if (success) {
      console.log("Skill check passed. Continue the game.");
      // Add your code here for what happens next when the skill check is passed
    } else {
      console.log("Skill check failed. Game over.");
      // Add your code here for what happens next when the skill check fails
    }
  }
}

// Function to perform a skill check
function performSkillCheck(abilityScore, difficulty) {
  // Compare the player's ability score to the difficulty level
  return abilityScore >= difficulty;
}
