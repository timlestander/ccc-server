const Polls = require('../models').Poll;
const Options = require('../models').Option;
const Votes = require('../models').Vote;

const getAllPolls = async () => {
  const polls = await Polls.findAll({
    include: [
      {
        model: Options,
        include: [
          {
            model: Votes
          }
        ]
      }
    ]
  });
  return polls;
};

const getPollById = async id => {
  const poll = await Polls.findOne({
    where: {
      id: id
    },
    include: [
      {
        model: Options,
        include: [
          {
            model: Votes
          }
        ]
      }
    ]
  });
  return poll;
};

module.exports = {
  getAllPolls,
  getPollById
};
