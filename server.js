const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/files', (req, res) => {
    const directoryPath = path.join(__dirname, 'public');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        res.json(files);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
