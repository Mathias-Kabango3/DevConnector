const express = require('express');
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Users = require("./routes/users");
const Profile = require("./routes/profile");
const Posts = require("./routes/posts");

dotenv.config();

const app = express();

// use routes
app.use("/api/users", Users);
app.use("/api/profile", Profile);
app.use("/api/posts", Posts);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
