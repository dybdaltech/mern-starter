const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000; //3000 is React port


app.get('/api', (req, res) => {
    const testData = [
        {id: 0, firstName: 'Success', lastName:'t'},
        {id: 1, firstName: 'John', lastName: 'doe'},
        {id: 2, firstName: 'Jane', lastName: 'doe'}
    ];
    res.json(testData);
});

app.listen(PORT, () => console.log("Server running on port: " + PORT));