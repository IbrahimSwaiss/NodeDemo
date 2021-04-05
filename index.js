'user strict';
const express = require('express');
const app = express();
const Joi = require('joi');

//app.use to use middleware to use it request pipline
//json middleware
app.use(express.json());

const courses = [
    { id: 1, name: 'math' },
    { id: 2, name: 'sience' },
    { id: 3, name: 'phsyics' },
]

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {//404
        res.status(404).send('the course does not exist!');
    } else {
        res.send(course);
    }
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

function validateCourse(course) {

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
});