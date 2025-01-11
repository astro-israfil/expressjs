const express = require("express")

const app = express();
const port = 5000


// Application level settings
app.set("view engine", "ejs")


// routing
app.get("/", (req, res) => {
    res.send("This is home page")
})

app.post("/login", (req, res) => {
    res.send("this is login route")
})

// api endpoints
app.post("/api/data", (req, res) => {
    res.json({
        message: "Data received",
        data: req.body
    })
})


app.use((err, req, res, next) => {
    if (err) {
        console.log(err.stack)
        return res.status(500).send("Internal Server Error ")
    }
    next()
})

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
})