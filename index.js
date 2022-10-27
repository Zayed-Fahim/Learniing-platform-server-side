const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./data/courses.json');
const category = require('./data/category.json')

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/', (req, res) => {
    res.send('learning platform server')
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})