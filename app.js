const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.js');
const laptopRoutes = require('./routes/laptop.js');
const port = 3000;

app.use(express.json());

app.use('/todos', todoRoutes);
app.use('/laptop', laptopRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.use((req, res) => {
    res.status(404).send('404 - Page ndak ketemu');
});

app.listen(port, () => {
    console.log(`Server udah lari at http://localhost:${port}/`);
});

