var readlineSync = require("readline-sync");
const terminalImage = require("terminal-image");
const chalkAnimation = require("chalk-animation");
const pressAnyKey = require("press-any-key");
var pixels = require("image-pixels");
const ci = require("chalk-image");



setTimeout(function() {

chalkAnimation.rainbow('Pokemon Gotta Yeet them all');

}, 0);




setTimeout(function() {
    let trainerName = readlineSync.question("What is your Pokemon trainer Name?");

  console.log("Hi Pokemon trainer " + trainerName + "!");
  //logic
}, 2500);

(pokemon = ["Pikachu", "Squirtle", "Bulbasaur"]),
  setTimeout(function() {
    index = readlineSync.keyInSelect(pokemon, "Which Pokemon do you chose?", {
      cancel: false
    });
    //logic
  }, 3000);

setTimeout(function() {
  if (pokemon[index] === "Pikachu") {
    ci.drawImg("./assets/pikachu.png");
  } else if (pokemon[index] === "Squirtle") {
    ci.drawImg("./assets/squirtle.jpg");
  } else if (pokemon[index] === "Bulbasaur") {
    ci.drawImg("./assets/bulbasaur.png");
  }
}, 5000);

setTimeout(function() {
  console.log("You  chose " + pokemon[index] + " My Guy!");
  //logic
}, 7000);

choices = ["battle", "evolve"];

evolves = [];

setTimeout(function() {
  let i = readlineSync.keyInSelect(
    choices,
    "Do you want to battle or evolve?",
    { cancel: false }
  );
  //logic
  if (choices[i] === "battle") {
    console.log(
      "You battled " + pokemon[Math.floor(Math.random() * pokemon.length)] + "!"
    );
    console.log("You Won!");
  } else if (choices[i] === "evolve") {
    if (pokemon[index] === "Pikachu") {
      ci.drawImg("./assets/raichu.jpg");
      setTimeout(function() {
        console.log("You done evolved into Raichu my guy!");
      }, 3000);
    } else if (pokemon[index] === "Squirtle") {
      ci.drawImg("./assets/wartortle.jpg");
      setTimeout(function() {
        console.log("You done evolved into wartortle my guy!");
      }, 3000);
    } else if (pokemon[index] === "Bulbasaur") {
      ci.drawImg("./assets/ivysaur.jpg");
      setTimeout(function() {
        console.log("You done evolved into venosaur my guy!");
      }, 3000);
    }
  }
}, 9000);

//logic
