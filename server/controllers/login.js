import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// login function, post to login
const loginPostController = async (req, res) => {
  const { email, password, role } = req.body;
  if (role === "user" || role === 'admin') {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("no user")
      return res.status(404).json({ message: "Account does not exist." });
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.json({ message: "Password invalid." });
    }
    if (role != user.role) {
      return res.status(404).json({ message: "Account does not exist." });
    }
    const token = jwt.sign(
      { email: user.email, role: "user" },
      process.env.userKEY
    );
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.json({ login: true, role: "user" });
  } 
  else if (role === "professional") {
    const user = await User.findOne({ email });
    
    // checks for existing user else break
    if (!user) {
      return res.status(404).json({ message: "Account does not exist." });
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.json({ message: "Password invalid." });
    }
    if (role != user.role) {
      return res.status(404).json({ message: "Account does not exist." });
    }
    const token = jwt.sign(
      { email: user.email, role: "professional" },
      process.env.userKEY
    );
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.json({ login: true, role: "professional" });
  } 
  else {
  }
};

export default loginPostController;
