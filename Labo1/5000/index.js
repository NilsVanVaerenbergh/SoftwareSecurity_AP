const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:5001")
    res.send("Hello World!")
})
app.listen(5000, () => {
    console.log("Server listening on port 5000")
})