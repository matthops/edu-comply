const getAllObjectivesByTheme = (req, res, next) => {
  const dbInstance = req.app.get('db');
  console.log('hit');
  dbInstance
    .get_all_objectives_by_theme()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(console.log);
};

const getAllObjectives = (req, res, next) => {
  const dbInstance = req.app.get('db');
  dbInstance
    .get_all_objectives()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(console.log);
};

const getAllThemes = (req, res, next) => {
  const dbInstance = req.app.get('db');
  console.log('hit themes');
  dbInstance
    .get_all_themes()
    .then(
      response => res.status(200).send(response) || console.log(response.data)
    )
    .catch(console.log);
};

const getAllCompleteObjectives = (req, res, next) => {
  const dbInstance = req.app.get('db');
  console.log('hit themes');
  dbInstance
    .get_all_complete_objectives()
    .then(
      response => res.status(200).send(response) || console.log(response.data)
    )
    .catch(console.log);
};
const getAllIncompleteCompleteObjectives = (req, res, next) => {
  const dbInstance = req.app.get('db');
  console.log('hit themes');
  dbInstance
    .get_all_incomplete_objectives()
    .then(
      response => res.status(200).send(response) || console.log(response.data)
    )
    .catch(console.log);
};
const changeStatus = async (req, res, next) => {
  const db = req.app.get('db');

  db.change_status(req.body.status, req.body.id).then(response =>
    res.status(200).json(response)
  );
};
const getAllTasks = async (req, res, next) => {
  const db = req.app.get('db');

  db.get_all_tasks().then(response => res.status(200).send(response));
};
const getAllTasksByObjective = (req, res, next) => {
  const db = req.app.get('db');

  db.get_all_tasks_by_objective(req.query.id).then(response =>
    res.status(200).send(response)
  );
};
// const addTask = async (req, res, next) => {
//   const db = req.app.get('db');

//   console.log(req.body);
//   // headline, status, owner, due_date, description, objective
// };

module.exports = {
  getAllObjectives,
  getAllObjectivesByTheme,
  getAllThemes,
  getAllCompleteObjectives,
  getAllIncompleteCompleteObjectives,
  changeStatus,
  getAllTasks,
  getAllTasksByObjective
};
