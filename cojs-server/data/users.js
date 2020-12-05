import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jeff Ng",
    email: "jeff@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Adam Ng",
    email: "Adam@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Roy James",
    email: "roy@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Aman Verma",
    email: "Aman@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Noman White",
    email: "noman@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Kevin Huang",
    email: "Kevin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "David Lowell",
    email: "david@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Robert Williams",
    email: "rober@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Mike James",
    email: "mike@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Joseph Lin",
    email: "joseph@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
