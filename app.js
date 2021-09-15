const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.use(logger("combined"));
app.use(express.json());

let teamArray = [{ id: 1, teamName: "Lakers" }];

app.get("/", function (req, res) {
	res.render("index");
});

app.post("/", function (req, res) {
	// res.send("post path!");
	console.log(req.body);
	res.json({ team: teamArray, firstName: "Yup" });
});

app.listen(PORT, function () {
	console.log(`Server is now running on PORT: ${PORT}`);
});
