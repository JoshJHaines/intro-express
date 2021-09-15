const express = require("express")
const path = require("path")

const app = express()

app.set("views", path.join(__dirname, "views"))

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log(`Server is now running on PORT: ${PORT}`)
})