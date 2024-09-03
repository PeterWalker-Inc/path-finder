const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = 40000;

app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Server Static Files
const frontPath = app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/flag', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'flag.html'));
});

app.get('/flag/back', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'back.html'));
});

app.get('/flag/back/give_me_the_flag', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ihack.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'wrong.html'));
});