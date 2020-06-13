// Game Variables
var playerCash = 750.0;

var elementCashOnHand = null;

var elementSlot1 = null;
var elementSlot2 = null;
var elementSlot3 = null;


// Functions
/*
    This function will handle events we want to trigger when the page loads
*/
function gameStartup() {
    // Get the CashOnHand element
    elementCashOnHand = document.getElementById("pCashOnHand");

    // populate with the players cash variable
    elementCashOnHand.innerHTML = "$" + playerCash;

    // Image Elements
    elementSlot1 = document.getElementById("imgSlot1");
    elementSlot2 = document.getElementById("imgSlot2");
    elementSlot3 = document.getElementById("imgSlot3");

    // Modify Image attributes
    elementSlot1.src = "imgs/Cherry-512.png";
    elementSlot2.src = "imgs/Cherry-512.png";
    elementSlot3.src = "imgs/Cherry-512.png";

    // Modify size attributes
    //elementSlot1.width = "100";
    //elementSlot1.height = "100";

    // Assign a CSS class name to an element
    elementSlot1.className = "imgSlot";
    elementSlot2.className = "imgSlot";
    elementSlot3.className = "imgSlot";

}

// Randomly select a slot number, between 1 and 3
function generateSlotNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

// Accept number and page element to assign image
function setSlotImage(num, element) {
    if (num == 1) // Seven
    {
        element.src = "imgs/Seven-512.png";
    } else if (num == 2) // Bell
    {
        element.src = "imgs/Bell-512.png";
    } else if (num == 3) // Cherry
    {
        element.src = "imgs/Cherry-512.png";
    }
}

// Player win 
function playerWon(bet) {
    // Reward the bet multiplied by 3 to the user
    playerCash = playerCash + (bet * 3);
    updatePlayerCash();
}

// Player lost 
function playerLost(bet) {
    // Subtract bet from player
    playerCash = playerCash - bet;
    updatePlayerCash();
}

//update cash on hand
function updatePlayerCash() {
    elementCashOnHand.innerHTML = "$" + playerCash;
    console.log(playerCash);
}

// Invalid Bet Made
function invalidBet() {
    var elButton = document.getElementById("btnPlay");
    elButton.className = "notPlayButton";
}

// The game logic for the webpage
function playSlots() {
    // Accept players bet
    var theBet = parseFloat(document.getElementById("tbBetInput").value);

    // Approach 1, catch instead invalid input, and kick the user out of this function (playSlots) using return
    /*if (theBet < 5 || theBet > playerCash)
    {
        return;
    }*/

    // Validate the bet
    if (theBet > 5 && theBet <= playerCash) // This will catch if the user enters a negative number, it also ensures a minimum bet is made
    {
        // Approach 2, copy paste game code into this if scope
        // Randomly select slots
        var slot1 = generateSlotNumber();
        var slot2 = generateSlotNumber();
        var slot3 = generateSlotNumber();

        // Assign slot image
        setSlotImage(slot1, elementSlot1);
        setSlotImage(slot2, elementSlot2);
        setSlotImage(slot3, elementSlot3);

        //setSlotImage(1, elementSlot1);
        //setSlotImage(2, elementSlot2);
        //setSlotImage(3, elementSlot3);

        // win or lose condition
        if (slot1 === slot2 && slot1 === slot3) {
            // Reward Player on Win
            playerWon(theBet);
            console.log("Win!");
        } else {
            // Reward Player on Lose
            playerLost(theBet);
            console.log("Lose!");
        }

        // Reset Button 
        var elButton = document.getElementById("btnPlay");
        elButton.className = "playButton";

    } else {
        invalidBet();
        console.log("Invalid Bet!");
    }

}