// scores
var playerNumber = 0;
var randomNumber = 0;

// wins and losses
var wins = 0;
var losses = 0;

var people = {
    cloud: {
        value: 0
    },
    light: {
        value: 0
    },
    tidus: {
        value: 0
    },
    enemy: {
        value: 0
    }
};

// this function generates random numbers and console them
var rando = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// starts and restarts the game
var beginGame = function () {

    // resets the player number
    playerNumber = 0;

    // Changes the random number
    randomNumber = rando(19, 120);

    // change the min and max vales for each char
    people.cloud.value = rando(1, 12);
    people.light.value = rando(1, 12);
    people.tidus.value = rando(1, 12);
    people.enemy.value = rando(1, 12);

    //console log the results for each char
    console.log("Cloud " + people.cloud.value,
        "Light " + people.light.value,
        "Tidus " + people.tidus.value,
        "Enemy " + people.enemy.value);
    console.log("Target score: " + randomNumber);


    // send the results to the target in the html
    $("#yourNumber").html(playerNumber);
    $("#randoNumber").html(randomNumber);
};

// what happens when the user clicks on chars
var addValues = function (people) {

    // change userNumber
    playerNumber += people.value;

    // send the chamges in user number to the html
    $("#yourNumber").html(playerNumber);

    // call the checkWin function
    checkWin();
};

// check to see if the user won or lost; reset the game
var checkWin = function () {

    // if the players score is equal to the OG score then the user wins
    if (playerNumber === randomNumber) {
        // add 1 to wins
        wins++;
        // send the changes to wins in html
        $("#wins").html(wins);
        // reset the game
        beginGame();

    }
    // if the userNumber is greater than the targetNumber, the user has lost
    else if (playerNumber > randomNumber) {
        // adds one point to the losses counter
        losses++;
        // updates html to reflect this
        $("#losses").html(losses);
        beginGame();

    }

};
$("#cloud").click(function () {
    addValues(people.cloud);
});

$("#light").click(function () {
    addValues(people.light);
});

$("#tidus").click(function () {
    addValues(people.tidus);
});

$("#enemy").click(function () {
    addValues(people.enemy);
});

// initilize game and click event buttons
beginGame();