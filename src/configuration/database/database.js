const mongoose = require('mongoose');
require('dotenv').config();


const databaseConnection = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => { console.log("database is connected successfully"); })
        .catch((err) => {
            console.error(err.message);
            console.log("error in database connection");
            process.exit(1);
        });
}

module.exports = databaseConnection;