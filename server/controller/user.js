const User = require("../modals/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config({path: "../config/config.env"});

const register = async (req, res) => {
  // res.send("Hi again");
  console.log(req.body);
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please fill the fields properly!!" });
  }

  try {
    console.log("done");
    const userExist = await User.findOne({ email: email });
    console.log(userExist);
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
        cpassword: cpassword,
      });
      let userRegistered;
      const rounds = 10;
      bcrypt.genSalt(rounds, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          user
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // token = userLogin.generateAuthToken();

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        const token = jwt.sign(
          { id: userLogin._id, email: userLogin.email },
          process.env.ACCESS_TOKEN_SECRET
        );
        return res.json(token).status(200);
      }
    } else {
      res.status(400).json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  // getAllUser,
  register,
  login,
  // deleteUser,
  // userTokenvalid,
};
