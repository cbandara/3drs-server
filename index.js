const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// middleware
app.use(cors());
app.use(express.json()); //req.body

// routes

// create a roomspace
app.post("/roomspaces", async (req, res) => {
  try {
    const { description, price, location } = req.body;
    const newRoomspace = await pool.query(
      "INSERT INTO roomspaces (description, price, location) VALUES($1, $2, $3) RETURNING *",
      [description, price, location]
    );
    res.json(newRoomspace.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
})

// get all rooomspaces
app.get("/roomspaces", async (req, res) => {
  try {
    const allRoomspaces = await pool.query("SELECT  * FROM roomspaces");
    res.json(allRoomspaces.rows);
  } catch (error) {
    console.error(err.message);
  }
})

// update a roomspace
app.put("/roomspaces/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, price, location } = req.body;
    const updateRoomspace = await pool.query(
      "UPDATE roomspaces SET description = $1, price=$2, location=$3 WHERE roomspaces_id=$4 RETURNING *",
      [description, price, location, id]
    )
    res.json(updateRoomspace.rows[0]);
  } catch (error) {
    console.error(error.message)
  }
})


// delete a roomspace


app.listen(5000, () => {
  console.log("server has started on port 5000");
})