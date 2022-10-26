const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/courses.json');
const course = require('./data/courses.json')

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('./courses/:id',(req, res)=> {
    const id = req.params.id;
    console.log(id)
    const desireCourse = course.find(n => n.category_id === id);
    res.send(desireCourse)
})

app.get('/', (req, res) => {
    res.send('learning platform server')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})