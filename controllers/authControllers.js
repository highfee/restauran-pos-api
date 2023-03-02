import User from "../models/usersModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../config/error.js";
import jwt from "jsonwebtoken";
// register user

export const registerUser = async (req, res, next) => {
  const userExist = await User.findOne({ username: req.body.username });

  if (userExist) {
    return next(createError(400, "Username already exist"));
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const user = new User({
    ...req.body,
    password: hashedPassword,
  });

  await user.save();
  res.status(201).json(user);
};

// login user

export const loginUser = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });

  if (!(user && bcrypt.compareSync(req.body.password, user.password))) {
    return next(createError(404, "Invalid credentials"));
  }
  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "beebee");

  await user.save();
  res.cookie("access_token", token, { httpOnly: true }).status(201).json(user);
};
