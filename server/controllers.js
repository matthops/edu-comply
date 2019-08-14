const getAllObjectivesByTheme = (req, res, next) => {
  const dbInstance = req.app.get('db');
  console.log('hit');
  dbInstance
    .get_all_objectives_by_theme()
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(console.log);
};

const getAllObjectives = (req, res, next) => {
  const dbInstance = req.app.get('db');
  console.log('hit');
  dbInstance
    .get_all_objectives()
    .then(response => {
      console.log(response);
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

module.exports = {
  getAllObjectives,
  getAllObjectivesByTheme,
  getAllThemes,
  getAllCompleteObjectives,
  getAllIncompleteCompleteObjectives
};
