const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("test1")
})

app.listen(PORT, () => {
    console.log("running on PORT 3000");
    
})