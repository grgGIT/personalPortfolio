const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || process.env.NODE_PORT || 3000;

//host the front end folder
const frontendClient = path.join(__dirname,'..', 'frontend')

//serves the front end folder to the express server
app.use(express.static(frontendClient))
//serves for json use purposes
app.use(express.json())

// Define a route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname, '../frontend/homepage.html'));
});

//puts serer on the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))