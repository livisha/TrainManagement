const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  database: "postgres",
  password: 1234,
  port: 5432,
  user: "postgres",
});

export default client;
