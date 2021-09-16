const { RSA_NO_PADDING } = require("constants");
const express = require("express");
const logger = require("morgan");
const path = require("path");

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

let teamArray = [
	{ id: 1, teamName: "Lakers" },
	{ id: 2, teamName: "Celtics" },
	{ id: 3, teamName: "76ers" },
	{ id: 4, teamName: "Bulls" },
];

app.get("/", function (req, res) {
	//res.render("index");
	console.log(req.query);
	if (req.query) {
		for (i = 0; i < teamArray.length; i++) {
			if (req.query.teamName === teamArray[i].teamName) {
				res.json({
					id: teamArray[i].id,
					teamName: teamArray[i].teamName,
				});
			} else {
                res.send("Team does not exist. Check Spelling")
            }
		}
	} else {
		res.json(teamArray);
	}
});

app.get("/get-team-array", function (req, res) {
	res.json({ teamArray });
});

app.get("/get-team-name/:teamName", function (req, res) {
	console.log(`Params: ${req.params.teamName}`);
	console.log(teamArray);

	for (let i = 0; i < teamArray.length; i++) {
		// + sign turns string into number
		if (req.params.teamName === teamArray[i].teamName) {
			res.json({ id: teamArray[i].id, teamName: teamArray[i].teamName });
		}
	}
});

app.get("/get-team-id/:id", function (req, res) {
	console.log(`Params: ${req.params.id}`);
	console.log(teamArray);
	for (let i = 0; i < teamArray.length; i++) {
		// + sign turns string into number
		if (+req.params.id === teamArray[i].id) {
			res.json({ id: teamArray[i].id, teamName: teamArray[i].teamName });
		}
	}
});

app.post("/", function (req, res) {
	// res.send("post path!");
	console.log(req.body);
	teamArray.push(req.body);
	res.json({ team: teamArray, firstName: "Yup" });
});

app.listen(PORT, function () {
	console.log(`Server is now running on PORT: ${PORT}`);
});
