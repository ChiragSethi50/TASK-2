const express =require("express");
const path = require("path");
const app = express();
const Userlog = require("./models/signInfo.js");
const UserLog = require("./models/loginInfo.js");
const hbs = require("hbs");
require("./db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("login")
})
app.get("/home", (req, res) => {
    res.render("home");
  });
  app.get("/signin", (req, res) => {
    res.render("signin", {
      n: "login",
    });
  });
  app.get("/login", (req, res) => {
    res.render("login");
  });
  app.get("/index", (req, res) => {
    res.render("index");
  });
  app.post("/contact", async (req, res) => {
    try {
      
      const UserData = new User(req.body);
      await UserData.save();
      res.status(201).render("home");
    } catch (error) {
      res.status(500).send(error);
    }
  });
  app.post("/signup", async (req, res) => {
    try {
    
      const UserlogData = new Userlog(req.body);
      await UserlogData.save();
      res.status(201).render("index");
    } catch (error) {
      res.status(500).send(error);
    }
  });
  app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    Userlog.findOne({ email: email, password: password }, (err, user) => {
      if (err) {
        console.log(err);
        res.send("Error");
      } else if (!user) {
        res.send("User not found");
      } else {
        res.render("index");
      }
    });
  });

app.listen(port, () => {
    console.log(`server is running at port no ${port}`)
})