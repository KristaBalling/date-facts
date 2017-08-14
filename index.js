const moment = require('moment');
const chalk = require('chalk');

console.log("The current date is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a.")));
console.log("It is the " + chalk.magenta(moment().format("DDD")+ "th") + " day of the year.");
console.log("It is " + chalk.cyan(moment().format("sssss")+ " seconds into the day."));
console.log("It " + chalk.green("is") + " during daylight savings time.");
console.log(chalk.red("It is") + " not a leap year.");
