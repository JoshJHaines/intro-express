const express = require("express");
const logger = require("morgan");
const path = require("path");

const teamRouter = require("./routes/teamRouter")

const app = express();

//sets views to look at the directory views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//tells the app to look for static files in the public directory
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

//tells app to use logger/morgan
app.use(logger("combined"));
//tells app to read JSON
app.use(express.json());
//allows app to use encoded urls
app.use(express.urlencoded({ extended: false }));

app.use("/api/team", teamRouter)



app.listen(PORT, function () {
	console.log(`Server is now running on PORT: ${PORT}`);
});
