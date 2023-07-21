document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of the ability scores
    var smartScore = parseInt(document.getElementById('smart').value);
    var funnyScore = parseInt(document.getElementById('funny').value);
    var violentScore = parseInt(document.getElementById('violent').value);

    // Check if the total score is 5
    var totalScore = smartScore + funnyScore + violentScore;
    if (totalScore !== 5) {
        alert('Total score must be 5. Please assign 5 points to the abilities.');
        return;
    }

    // Create the character object
    var character = {
        smart: smartScore,
        funny: funnyScore,
        violent: violentScore
    };

    // Display the character information
    var characterResult = document.getElementById('characterResult');
    characterResult.innerHTML = 'Character created:<br>' +
        'Smart: ' + character.smart + '<br>' +
        'Funny: ' + character.funny + '<br>' +
        'Violent: ' + character.violent;
});
