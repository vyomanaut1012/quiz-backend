const express = require('express');
const app = express();
require('dotenv').config();
var os = require('os');
var hostname = os.hostname();
const PORT = process.env.PORT || 4444;
const cors = require("cors");
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND,
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}));

const routerPath = require('./src/routes/routes.js');
app.use('/', routerPath);

const databaseConnection = require('./src/configuration/database/database.js');
databaseConnection();


app.listen(PORT, () => { console.log(`server started on port ${PORT} and ${hostname}`) });