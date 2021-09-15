const express = require("express")
const path = require("path")

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const PORT = process.env.PORT || 3000

app.get("/", function(req, res){
    res.render("index")
})

app.listen(PORT, function(){
    console.log(`Server is now running on PORT: ${PORT}`)
})