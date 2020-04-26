const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a roomspace

// get all rooomspaces

// update a roomspace

// delete a roomspace


app.listen(5000, () => {
  console.log("server has started on port 5000");
})