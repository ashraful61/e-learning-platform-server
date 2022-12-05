const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('API is Running');
});

app.get('/courses', (req, res) => {
    res.send(courses)
});
app.get('/courses/:id', (req, res) => {
     const id = parseInt(req.params.id);
     const selectedCourse = courses.find(course => course.id === id);
     res.send(selectedCourse)
});

// app.get('/category/:id', (req, res) => {
//     const id = req.params.id;
//     if (id === '08') {
//         res.send(news);
//     }
//     else {
//         const category_news = news.filter(n => n.category_id === id);
//         res.send(category_news);
//     }
// })

// app.get('/news', (req, res) =>{
//     res.send(news);
// });

// app.get('/news/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedNews = news.find(n => n._id === id);
//     res.send(selectedNews);
// });

app.listen(port, () => {
    console.log('Server running on port', port);
})
