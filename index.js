const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
// const port =  5000;

const categories = require('./data/Categories.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('news dragon is running')
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`News API is runnign on port : ${port}`)
})