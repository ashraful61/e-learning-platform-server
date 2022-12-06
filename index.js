const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const category = require('./data/course-category.json');

app.get('/', (req, res) => {
    res.send('API is Running');
});

app.get('/courses', (req, res) => {
    res.send(courses)
});
app.get('/course-categories', (req, res) => {
    res.send(category)
});
app.get('/courses/:id', (req, res) => {
     const id = parseInt(req.params.id);
     const selectedCourse = courses.find(course => course.id === id);
     res.send(selectedCourse)
});

app.get('/course-categories/:id', (req, res) => {
    const id = req.params.id;
    const courseCategory= courses.filter(n => n.course_category === id);
    res.send(courseCategory);
})

app.listen(port, () => {
    console.log('Server running on port', port);
})
