const Users = require('../models').User;

const addUser = user => {
  return Users.create(user);
};

const getUserByUsername = async username => {
  const user = await Users.findOne({
    where: { username },
    attributes: ['id', 'name', 'username']
  });

  return user;
};

const getUserById = async id => {
  const user = await Users.findOne({
    where: { id },
    raw: true,
    attributes: ['id', 'name', 'username']
  });

  return user;
};

const getAllUsers = async () => {
  const users = await Users.findAll();
  return users;
};

module.exports = {
  addUser,
  getUserByUsername,
  getUserById,
  getAllUsers
};
