const pollService = require('../services/poll');

const getAllPolls = async (req, res) => {
  const polls = await pollService.getAllPolls();
  res.send(polls);
};

const getPollById = async (req, res) => {
  const poll = await pollService.getPollById(req.params.id);
  res.send(poll);
};

module.exports = {
  getAllPolls,
  getPollById
};
