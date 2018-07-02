const Polls = require('../models').Poll;
const Options = require('../models').Option;

const getAllPolls = async () => {
  const polls = await Polls.findAll();
  return polls;
};

const getPollById = async id => {
  const poll = await Polls.findOne({
    where: {
      id: id
    },
    include: [
      {
        model: Options
      }
    ]
  });
  return poll;
};

module.exports = {
  getAllPolls,
  getPollById
};
