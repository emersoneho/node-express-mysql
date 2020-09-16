const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

require('./app/routes/routes.js')(app);
require('./app/routes/posts.js')(app);

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});