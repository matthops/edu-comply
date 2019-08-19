require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const path = require('path');

const ctlr = require('./controllers');

const port = process.env.port || 4000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set('db', dbInstance)
);

//ENDPOINTS
app.get('/api/getallobjectives', ctlr.getAllObjectives);
app.get('/api/getallobjectivesByTheme', ctlr.getAllObjectivesByTheme);
app.get('/api/getallthemes', ctlr.getAllThemes);
app.get('/api/getAllCompleteObjectives', ctlr.getAllCompleteObjectives);
app.get(
  '/api/getAllIncompleteCompleteObjectives',
  ctlr.getAllIncompleteCompleteObjectives
);
app.post('/api/changeStatus', ctlr.changeStatus);

app.use(express.static(`${__dirname}/../build`));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
