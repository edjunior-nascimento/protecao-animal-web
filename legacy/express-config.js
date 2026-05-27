const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('src'));

// Define a route to serve your webpage
app.get('/inicial', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});