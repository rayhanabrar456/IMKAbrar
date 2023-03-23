const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

const formRouter = require("./routes/form")

app.use("/", formRouter)

app.listen(port, () => console.log(`Express app running on port ${port}!`));