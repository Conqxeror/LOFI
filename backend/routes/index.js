const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const UserModel = require("./user");
const PostModel = require("./post");
const cookieParser = require("cookie-parser");
// const authenticate=require("../routes/middleware/authenticate")

app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));

mongoose.connect("mongodb://127.0.0.1:27017/myproject");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  },
});

const upload = multer({ storage: storage });

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });

    if (!user) {
      return res.json("No record existed");
    }

    if (user.password !== password) {
      return res.json("The password is incorrect");
    }

    const token = await user.generateAuthtoken();
    // console.log(token);

    // cookie generate
    res.cookie("usercookie", token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: false,
    });
   
    const result = {
      user,
      token,
    };
    res.status(201).json({ status: 201, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// user valid
// app.get("/validuser", authenticate, async (req, res) => {
//   console.log("done");
// });

app.post("/post", upload.single("postimage"), async (req, res) => {
  const { Name, username, itemname, description, lostlocation } = req.body;
  const postimage = req.file;

  if (
    !Name ||
    !username ||
    !itemname ||
    !description ||
    !lostlocation ||
    !postimage
  ) {
    res.status(422).json({ error: "Missing data" });
  }
  try {
    const finalPost = new PostModel({
      Name,
      username,
      itemname,
      description,
      lostlocation,
      postimage: postimage.path,
    });
    const post = await finalPost.save();
    console.log(post);
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
});

app.post("/register", async (req, res) => {
  const { username, password, confirmpassword, email, fullname } = req.body;

  if (!username || !password || !confirmpassword || !email || !fullname) {
    res.status(422).json({ error: "fill the all the data" });
  }
  try {
    const preuser = await UserModel.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "This user is already exist" });
    } else if (password !== confirmpassword) {
      res
        .status(422)
        .json({ error: "Password and confirmpassword deos not match" });
    } else {
      const finalUser = new UserModel({
        username,
        password,
        confirmpassword,
        email,
        fullname,
      });
      const storedata = await finalUser.save();
      console.log(storedata);
      res.status(201).json(storedata);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
