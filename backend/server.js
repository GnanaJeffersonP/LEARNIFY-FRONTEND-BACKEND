
const express = require('express');
const cors = require('cors');

const app = express();

// Allow React frontend to access the backend
app.use(cors());

// Read JSON data
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Learnify Backend is running!');
});

// Login API
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (
        email === 'student@gmail.com' &&
        password === 'learn123'
    ) {
        res.send({
            message: 'Login successful!'
        });
    } else {
        res.status(401).send({
            message: 'Invalid email or password'
        });
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
