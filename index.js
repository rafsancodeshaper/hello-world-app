const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

// express route params
app.get('/users/:id', (req, res) => {
    res.json({
        message: 'Hello World!',
        id: req.params.id
    });
});

app.listen(3000, () => {
    console.log('Hello World app listening on port 3000!');
});
