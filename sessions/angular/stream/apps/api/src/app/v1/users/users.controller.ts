import { Router } from "express";
// import { Credentials } from "@domain/credentials";
const router = Router();

const users = [
  {
    id: 1,
    username: "admin",
    password: "admin",
    role: 0
  },
  {
    id: 2,
    username: "admin1",
    password: "admin1",
    role: 0
  },
  {
    id: 3,
    username: "admin2",
    password: "admin2",
    role: 0
  }
]

router.post("/login", (req, res) => {
  const credentails = req.body;
  const foundUser = users.find(u => u.username === credentails.username && u.password === credentails.password);
  if (foundUser) {
    const response = { ...foundUser };
    delete response.password;
    res.json(response);
  } else {
    res.status(401).json({
      message: "Invalid credentials"
    });
  }
});



export { router };
