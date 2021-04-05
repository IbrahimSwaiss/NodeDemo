'user strict';
const express = require('express');
const app = express();
const Joi = require('joi');

const logger = require('./middlewares/logger');

app.use(express.json());// set req.body
app.use(logger)// custome middleware function

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