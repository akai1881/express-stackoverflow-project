require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const routes = require('./routes');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', routes);

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('server running on port ' + PORT));
    } catch (error) {
        console.log(error);
    }
};

startServer();
