
const express = require('express');
const router = express.Router();

let todos = [
    {
        id: 1, 
        merk: "Lenovo",
        model: "Ideapad 3",
        warna: "Hitam",
        tahun: 2019,
        completed: false
    },
    { 
        merk: "MacBook",
        model: "M1",
        warna: "Silver",
        tahun:2021,
        completed: false
    },
    {
        merk: "Acer",
        model: "Nitro",
        warna: "Black",
        tahun:2023,
        completed: false
    },
    {
        merk: "MSI",
        model: "Cyborg",
        warna: "Black",
        tahun:2024,
        completed: false
    }
    
];

// Endpoint untuk mendapatkan data Todos
router.get('/', (req, res) => { res.json(todos); });

router.post('/', (req, res) => {
    const newTodo = {
       id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

module.exports = router;