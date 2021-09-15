const { RSA_NO_PADDING } = require("constants");
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
app.use(express.urlencoded({extended: false}))

let teamArray = [
    { id: 1, teamName: "Lakers" },
    { id: 2, teamName: "Celtics" },
    { id: 3, teamName: "76ers" },
    { id: 4, teamName: "Bulls" }
];

app.get("/", function (req, res) {
	res.render("index");
});

app.get("/get-team-array", function(req, res){
    res.json({teamArray})
})

app.get("/get-team-id/:id", function(req, res){
    console.log(req.params)
    console.log(req.params.id)
    res.json({params: req.params, id: req.params.id})
})

app.post("/", function (req, res) {
	// res.send("post path!");
	console.log(req.body);
    teamArray.push(req.body)
	res.json({ team: teamArray, firstName: "Yup" });
});

app.listen(PORT, function () {
	console.log(`Server is now running on PORT: ${PORT}`);
});
