const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  console.log(req.query.name)
  res.send("User List")
})

module.exports = router