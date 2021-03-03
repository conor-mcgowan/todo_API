require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("This is a server, apparently."));

app.get("*", (req, res) res.redirect("/"));

app.listen(port, () => console.log(`The doors are open on port: ${PORT}`));
