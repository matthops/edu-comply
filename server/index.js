require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
// const session = require("express-session");
const cors = require("cors");
const path = require("path");

const port = process.env.port || 4000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.use(express.static(`${__dirname}/../build`));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
