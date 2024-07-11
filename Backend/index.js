const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
app.use(express.json());
app.use(cors());

const client = new Client({
  host: "localhost",
  database: "postgres",
  password: 1234,
  port: 5432,
  user: "postgres",
});
client.connect();

app.get("/", async (req, res) => {
  const result = await client.query("select * from train");
  console.log(result);
  res.send(result.rows);
});

app.post("/add", async (req, res) => {
  const data = req.body;
  console.log(req.body);
  const result = await client.query(
    `insert into train(train_no,train_name,platform_no) values ('${data.train_no}','',${data.platform_no})`
  );
  res.send("successfully created");
});

app.put("/update", async (req, res) => {
  const data = req.body;
  const result = await client.query(
    `update train set train_no = '${data.train_no}', platform_no = ${data.platform_no} where id = ${train_id}`
  );
  res.send("successfully created");
});

const port = 4000;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
