require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./db/connect");
const searchGoogle = require("./utils/crawler");

// app.use(
//   cors({
//     credentials: true,
//     origin: `${process.env.FRONTEND_URL}`,
//     sameSite: "none",
//   })
// );
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.get("/", async (req, res) => {
  try {
    const data = await searchGoogle(
      "government scholarship",
      3,
      "results.json"
    );
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.log(error);
  }
});

const start = async () => {
  try {
    await connectDB();
    console.log("Connected to Db");
    app.listen(port, () => {
      console.log(`Server is running on port ${port} `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
