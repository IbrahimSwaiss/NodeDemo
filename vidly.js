'user strict';
const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());// set req.body

app.get('/api/all-movies', (req, res) => {// route handler function (middleware)

})

app.post('/api/movie', (req, res) => {

})

app.put('/api/movie/:id', (req, res) => {

})

app.delete('/api/movie/:id', (req, res) => {

})

validateMovie(movie) {
    const schema = Joi.object({
        id: Joi.number().min(1),
        name: Joi.string().min(2).required,
    });

    return schema.validate(movie);
}