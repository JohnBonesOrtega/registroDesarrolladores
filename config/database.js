const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL = require('./properties').DB;

const connected = chalk.bold.cyan;
const error = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = () => {
    mongoose.connect(dbURL, { useNewUrlParser: true })
        .then(() => console.log(connected('Mongo connected on ', dbURL)))
        .catch((error) => console.log(`Connection has error ${error}`))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose is disconected');
            process.exit(0);
        })
    })
}
