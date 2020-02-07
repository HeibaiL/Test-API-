const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// PACK FOR LOCAL VARIABLES - FOR OTHERS NOT TO SEE MY LOG AND PASS IN THE CONNECTION LINK
require("dotenv").config();

const postRouter = require("./routes/posts");
const userRouter = require("./routes/users");
const userDetailRouter = require("./routes/userDetail");

app.use(bodyParser.json());
app.use("/posts", postRouter);
app.use("/user/", userRouter);
app.use("/user/:id", userDetailRouter);

app.get("/",(req,res)=>{
  res.send("Hello, it's a home page")
})

mongoose.connect(
  "mongodb+srv://John:Doe@testcluster-itxrr.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
).then(() => console.log("Connected to DB")).catch(err=>console.log("We got error",err))


app.listen(3000);
