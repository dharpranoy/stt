/* imports */
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

const { connectdb } = require('./config/mongodb');
const { interpret } = require('./utils/interpret');

/* init express, dotenv, cronjobs (if any) */
const app = express();
dotenv.config();
connectdb();

/* middleswares */
app.use(express.json({ limit: '50mb' }));
app.use(cors());

/* all routes start here */
app.use('/api/v1', require('./routes/v1/index'));

// Listen http port
app.listen(process.env.PORT)

// interpret();