const userService = require('../services/user');

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.send(users);
};

module.exports = {
  getAllUsers
};
