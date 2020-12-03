import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import problems from "./data/problems.js";
import User from "./models/userModel.js";
import Problem from "./models/problemModel.js";
import connectDB from "./config/db.js";

// this is data seeding. It's completely seperated from the server.
dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Problem.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProblems = problems.map((problem) => {
      return { ...problem, user: adminUser };
    });
    await Problem.insertMany(sampleProblems);

    console.log(`data imported!`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Problem.deleteMany();
    await User.deleteMany();

    console.log(`data destroyed!`.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
