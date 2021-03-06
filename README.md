# Express Intro



## Requirements

* [Node](https://nodejs.org/en/download/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [GitHub](https://www.github.com)
* [Express](https://expressjs.com/)
* [Morgan](https://www.npmjs.com/package/morgan)


## Overview

### In Terminal
First you will need to initialize/create the application. Create the directory where you would like this to live. Once you are in your new directory: 

1. Run  ‘npm init’
2. Change Entry Point to "app.js"
3. Enter till asked if correct (yes)
4. Touch "app.js"
5. Touch '.gitignore' and add node_modules
6. Run 'npm install express'
7. code . to open your IDE

### In app.js
Ok, so now you have the app started and your main JS file in there. Go into that app.js file and paste in:

```javascript
const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log(`Server is now running on PORT: ${PORT}`)
})
```

This should give you what you need to have a sever and run it on port 3000 in terminal.

### In Terminal
1. run 'nodemon'
2. run 'npm i ejs'
3. run 'mkdir views'
4. CD into views and 'touch index.ejs'

### index.ejs
1. Load HTML template
2. create an H1 with some text

### app.js
1. Add EJS
2. set path
``` javascript
const express = require("express")
const path = require("path")

const app = express()

console.log(__dirname)
console.log(path.join(__dirname, "views"))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const PORT = process.env.PORT || 3000

app.get("/", function(req, res){
    res.render("index")
})

app.listen(PORT, function(){
    console.log(`Server is now running on PORT: ${PORT}`)
})
```

### Browser
1. http://localhost:3000/


## Create Git Repo

### GitHub
1. Create new repo with app name
2. Do not add readme or anything. 

### In Terminal
1. git init
2. git add .
3. git commit -m "first commit"
4. git remote add origin https://github.com/'USERNAME'/'repo-name'.git [^2]



- 'git push' will throw an error
- 'git push origin master' will push to your repo only once. You need to set the upstream to continually push.
1. git push --set-upstream origin master

## Creating different URLs
### In app.js
``` javascript
if (request.url === "/" && request.method === "GET") {
		// response.end("Check back later for games details")
		fs.readFile("text.txt", function (error, data) {
			if (error) {
				response.writeHead(400)
				return response.end(`${error}`);
			} else {
				response.writeHead(200, { "Content-type": "text/html" });
				response.write(data);
				return response.end();
			}
		});
	}
```
1. Create if statement with the 'request.url'. Adding the 'request.method' in the if statement makes it stronger.
2. Inside the if statement, use node file share. 'fs.action' This could be readFile,writeFile,appendFile,[^3] etc.you will need to designate a path or specific file and declare a callback function with error & data in that order.
3. Create another if statement to declare error. The writeHead should be 400 and return the error message.
4. Create an else statement to return the data.
## Server Status

- 200 - OK
- 400 - Bad Request
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## CRUD

- Create
  - POST or add new entries
- Read
  - GET retrieve, search, or view existing entries
- Update
  - PUT or edit existing entries
- Delete
  - DELETE deactivate, or remove existing entries

## Using Postman

filled out soon


[^1]: Running with node will require you to turn the server off with "CTRL C" and start the server each time you make changes. Using Nodemon will allow you to use the browser refresh button for changes to show.

[^2]: You can copy the link needed for this straight from your empty GitHub repo page. 

[^3]: https://www.w3schools.com/nodejs/nodejs_filesystem.asp


