const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'build')));

app.get('/:place', function (req, res) {
    let place = req.params
    console.log(place)
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('App is listening on port: ' + PORT)
});