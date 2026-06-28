const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require("./db");
//const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5500;

app.get('/todos', (req, res) => {
    db.query('SELECT * FROM todos ORDER BY id DESC', (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Database Error'
            });
        }

        res.json(result);
    });
});

/*
==================================
ADD TASK
==================================
*/

app.post('/todos', (req, res) => {

    const { task } = req.body;

    if (!task || task.trim() === '') {
        return res.status(400).json({
            message: 'Task cannot be empty'
        });
    }

    db.query(
        'INSERT INTO todos(task) VALUES(?)',
        [task],
        (err) => {

            if (err) {
                return res.status(500).json({
                    message: 'Failed to add task'
                });
            }

            db.query(
                'SELECT * FROM todos ORDER BY id DESC',
                (err, result) => {

                    if (err) {
                        return res.status(500).json({
                            message: 'Database Error'
                        });
                    }

                    res.json(result);
                }
            );

        }
    );

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});