const express = require('express');
const app = express();
const cors = require('cors')

const { jokenpo } = require('./src/routes');

app.use(cors());
app.use(express.json());
app.use(jokenpo());

app.listen(3001,() => console.log("server is running!"));
module.exports = app;