const express = require("express")
const router = express.Router()

let teamArray = [
	{ id: 1, teamName: "Lakers" },
	{ id: 2, teamName: "Celtics" },
	{ id: 3, teamName: "76ers" },
	{ id: 4, teamName: "Bulls" },
];

router.get("/", function (req, res) {
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

router.get("/get-team-array", function (req, res) {
	res.json({ teamArray });
});

router.get("/get-team-name/:teamName", function (req, res) {
	console.log(`Params: ${req.params.teamName}`);
	console.log(teamArray);

	for (let i = 0; i < teamArray.length; i++) {
		// + sign turns string into number
		if (req.params.teamName === teamArray[i].teamName) {
			res.json({ id: teamArray[i].id, teamName: teamArray[i].teamName });
		}
	}
});

router.get("/get-team-id/:id", function (req, res) {
	console.log(`Params: ${req.params.id}`);
	console.log(teamArray);
	for (let i = 0; i < teamArray.length; i++) {
		// + sign turns string into number
		if (+req.params.id === teamArray[i].id) {
			res.json({ id: teamArray[i].id, teamName: teamArray[i].teamName });
		}
	}
});

router.post("/", function (req, res) {
	// res.send("post path!");
	console.log(req.body);
	teamArray.push(req.body);
	res.json({ team: teamArray, firstName: "Yup" });
});

module.exports = router