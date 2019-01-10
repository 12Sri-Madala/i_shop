const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

require('./db');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(resolve( __dirname, 'client', 'dist' )));

require('./routes/router')(app);

app.get('/', (req, resp) => {
    resp.send('<h1>Server is runnin fool<h1>');
})

app.listen(PORT, () => {
    console.log('I\'m listening on PORT: ' + PORT + ' SHHHHHHHHHHHHHHH');
}).on('error', (err) => {
    console.log('Listen Error: You already have a surver running on PORT: ' + PORT)
})