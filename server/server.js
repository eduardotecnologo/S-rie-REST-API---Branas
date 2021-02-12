const express = require('express');
const app = express();

app.use('/', require('./route/postsRoutee'));

app.listen(3000);