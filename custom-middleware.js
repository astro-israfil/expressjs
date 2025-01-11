const express = require("express")

const app = express()

const requestTimestampLogger = (req, res, next) => {
    const timestamp = new Date().toLocaleString()
    console.log(`${timestamp} || ${req.method} || ${req.url}`)
    
    req.timestamp = timestamp
    next();
}

app.use(requestTimestampLogger)

app.get("/", (req, res) => {
    res.send("Home page " + req.timestamp)
})

app.get("/about", (req, res) => {
    res.send("About page "+ req.timestamp)
})

app.listen(3000, () => {
    console.log("Server is runnig on port 3000")
})