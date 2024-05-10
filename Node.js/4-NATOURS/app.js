const express = require('express');
const morgan = require('morgan');
const { stringify } = require('querystring');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

/* Middlewares */
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') { 
    app.use(morgan('dev')); 
} /*else { 
    app.use(morgan('tiny')); 
}*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');    
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();    
    next();
});

/* Routes */
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

/* Start Server */
module.exports = app;
