const express = require("express")

const app = express()

const myFirstMiddleware = (req, res, next) => {
    console.log("I do always run when user hit an endpoint")
    next()
}

app.use(myFirstMiddleware)

app.get("/", (req, res) => {
    res.send("Home page")
})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.listen(3000, () => {
    console.log("Server is runnig on port 3000")
})