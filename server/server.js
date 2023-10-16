// INITIALISATION D'EXPRESS

const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello from Express server !');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// LIAISON AVEC LE CLIENT

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}

// ROUTES

app.get('/test', (req, res) => {
    res.json({ message: "Server is working!" });
});
