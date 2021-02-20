const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const routes = require('./routes');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(routes);

app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});