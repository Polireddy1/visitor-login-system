const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "loginsystem"
});
db.connect((err) => {
  if (err) {
    console.log("Database connection error: " + err);
  } else {
    console.log("Connected to the database");
  }
});
app.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  console.log("POST method is called ");
  const sql = 'INSERT INTO registration (username, password,email) VALUES (?, ?, ?)';
  db.query(sql, [username, password, email], (err, result) => {
    if (err) {
      console.log("Database error: " + err);
      res.status(500).send("Error registering user");
    } else {
      res.status(200).send("User registered successfully");
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
