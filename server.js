require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");

const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("This is a server, apparently."));

app.get("*", (req, res) => res.redirect("/"));

app.listen(PORT, () => console.log(`The doors are open on port: ${PORT}`));
