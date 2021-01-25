import { Router } from "express";
import { Credentials, IUser } from '@stream/domain';
import { User } from "@stream/db-schema";
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

router.post("/login", (req, res) => {
  // const credentails: Credentials = req.body;
  // const foundUser = users.find(u => u.username === credentails.username && u.password === credentails.password);
  // if (foundUser) {
  //   const response = { ...foundUser };
  //   delete response.password;
  //   res.json(response);
  // } else {
  //   res.status(401).json({
  //     message: "Invalid credentials"
  //   });
  // }
});

router.post("/", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json(err)
  }
})



export { router };
