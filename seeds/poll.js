const Polls = require('../models').Poll;
const Options = require('../models').Option;

module.exports = () => {
  return Polls.bulkCreate([
    {
      id: 100,
      question: 'Vad ska vi äta?',
      userId: 100
      // options: [
      //   {
      //     id: 100,
      //     text: 'Hambugare'
      //   },
      //   {
      //     id: 101,
      //     text: 'Pizza'
      //   }
      // ]
    },
    {
      id: 101,
      question: 'Vart ska vi kröka?',
      userId: 100
      // options: [
      //   {
      //     id: 102,
      //     text: 'Bunkern'
      //   },
      //   {
      //     id: 103,
      //     text: 'Hemma'
      //   }
      // ]
    },
    {
      id: 102,
      question: 'Ska babben åka hem?',
      userId: 101
      // options: [
      //   {
      //     id: 104,
      //     text: 'Ja'
      //   },
      //   {
      //     id: 105,
      //     text: 'Nej'
      //   }
      // ]
    },
    {
      id: 103,
      question: 'SKA DU HA ELLER?',
      userId: 102
      // options: [
      //   {
      //     id: 106,
      //     text: 'Kanske'
      //   },
      //   {
      //     id: 107,
      //     text: 'Nej'
      //   }
      // ]
    }
  ]);
};
