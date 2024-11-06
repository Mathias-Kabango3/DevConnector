const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const passport = require("passport");

const connectDB = require("./config/db");
const Users = require("./routes/users");
const Profile = require("./routes/profile");
const Posts = require("./routes/posts");

dotenv.config();

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);
// use routes
app.use("/api/users", Users);
app.use("/api/profile", Profile);
app.use("/api/posts", Posts);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
