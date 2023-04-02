const express = require('express');
const app = express();
const port = 8000;
//const path = require('path');


const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(express.static('public'));


//test


//Setting the view engine to ejs
app.set('view engine', 'ejs');


//Route declaration
const homeRouter = require('./routers/homeRouter');
app.use('/', homeRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
