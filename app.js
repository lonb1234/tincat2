const express = require("express")
const bodyPaser = require("body-parser")
const ejs = require("ejs")
const app = express()
app.use(bodyPaser.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs')

app.use(express.static("public"));


let members = []





app.get("/", function(req, res) {
  res.render("index")
})

app.get("/pricing", function(req, res) {
  res.render("pricing")
})

app.get("/download", function(req, res) {
  res.render("download")
})

app.get("/contact", function(req, res) {
  res.render("contact")
})

app.get("/login", function(req, res) {
  res.render("login")
})

app.get("/signup", function(req, res) {
  res.render("signup")
})

app.get("/members", function(req, res) {
  res.render("login")
})

app.get("/profile", function(req, res) {
  res.render("profile")
})

app.get("/messages", function(req, res) {
  res.render("messages")
})

app.post("/signup", function(req, res) {
  const signup = {
    signUsername: (req.body.Username),
    signPassword: (req.body.Password),
    signAge: (req.body.Age),
    signGender: (req.body.Gender)
  }
  members.push(signup)
  members.forEach(function(member) {
    console.log(members)
  })
  res.redirect("/")

})



app.listen(3000, function() {
  console.log("server runs on 3000")
})
