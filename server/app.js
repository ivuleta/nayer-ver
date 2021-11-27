const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION);
mongoose.connection.once('open', () => console.log('DB Connected'))
                   .on('error', (err) => console.log(err));

//Importing routes
const userRoute = require('./routes/user');
const appointmentRoute = require('./routes/appointment');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => 
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
               'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if(req.method === 'OPTIONS') 
    {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes handling
app.use('/user', userRoute);
app.use('/appointment', appointmentRoute);

// Error handling
app.use((req, res, next) => 
{
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => 
{
    res.status(err.status || 500);
    res.json({ err: { message: err.message } });
});

app.listen(4000);