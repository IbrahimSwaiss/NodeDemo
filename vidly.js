'user strict';
const express = require('express');
const app = express();
const Joi = require('joi');
const helemt = require('helmet');
const morgan = require('morgan');
const logger = require('./middlewares/logger');
const config = require('config');
const appName = config.get('name');
const appPassword = config.get('password');

console.log(appName);
console.log(appPassword);
//export NODE_ENV=development
// console.log(process.env.NODE_ENV);
// console.log(app.get('env'));

app.use(express.json());// set req.body
app.use(logger)// custome middleware function
app.use(helemt());

if (app.get('env') == 'development')
    app.use(morgan('tiny'));

app.get('/api/all-movies', (req, res) => {// route handler function (middleware)
    res.send('test');
})

app.post('/api/movie', (req, res) => {

})

app.put('/api/movie/:id', (req, res) => {

})

app.delete('/api/movie/:id', (req, res) => {

})

function validateMovie(movie) {
    const schema = Joi.object({
        id: Joi.number().min(1),
        name: Joi.string().min(2).required,
    });

    return schema.validate(movie);
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
});