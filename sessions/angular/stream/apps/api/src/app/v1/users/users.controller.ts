import { Router } from "express";
import { Credentials } from '@stream/domain';
import { User } from "@stream/db-schema";
import { sign, verify } from "jsonwebtoken";
const router = Router();

// const users = [
//   {
//     id: 1,
//     username: "admin",
//     password: "admin",
//     role: 0
//   },
//   {
//     id: 2,
//     username: "admin1",
//     password: "admin1",
//     role: 0
//   },
//   {
//     id: 3,
//     username: "admin2",
//     password: "admin2",
//     role: 0
//   }
// ]

// Object Relation Mapper - ORM
// Object Document Mapper - ODM
// Table <-> Collection
// Record <-> Document

router.post("/login", async (req, res) => {
  const credentails: Credentials = req.body;
  // todo: hash the password to compare
  const foundUser = await User.findOne({
    username: credentails.username.trim().toLowerCase(),
    password: credentails.password
  });


  if (foundUser) {
    const response = { ...foundUser.toObject() };
    delete response.password;
    const token = sign({
      role: response.role,
      id: response._id.toString(),
      name: response.name
    }, process.env.secret,
      {
        // expiresIn: "1m",
        // issuer: "ABC"
      });
    // create a JWT token and add certain claims to it
    res.json({
      user: response,
      token
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials"
    });
  }
});

router.post("/", async (req, res) => {
  const user = new User(req.body);
  user.username = user.username.trim().toLowerCase();
  // todo: Hash password
  try {
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json(err)
  }
})



export { router };
