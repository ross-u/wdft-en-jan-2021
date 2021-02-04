// require() - used for loading modules (or other files)
// we can use it to load installed packages
// or to load content from local modules/files.

const chalk = require("chalk");
const greet = require("./greetings");
const d = require("./data");

// console.log(greet.en);
// console.log(greet.es);
// console.log(greet.de);
// console.log(greet.fr);
// console.log(greet.it);

console.log(chalk.whiteBright.bgBlue.bold(greet.en));

console.log(chalk.yellow.bgRed.bold(greet.es));

console.log(chalk.bgYellowBright(greet.de));

console.log(
  chalk.whiteBright.bgBlueBright(greet.fr.split(" ")[0]),
  chalk.whiteBright.bgRed(greet.fr.split(" ")[1])
);

console.log(
  chalk.whiteBright.bgRed(greet.it.split(" ")[0]),
  chalk.whiteBright.bgGreen(greet.it.split(" ")[1])
);
