const authController = require('./controllers/auth');
const authMiddleware = require('./middlewares/auth');
const userController = require('./controllers/user');
const pollController = require('./controllers/poll');

module.exports.set = app => {
  // Public routes
  app.post('/login', authController.login);
  app.post('/register', authController.register);

  // Protected routes
  app.get('/users', authMiddleware.checkAuth, userController.getAllUsers);
  app.get('/polls', authMiddleware.checkAuth, pollController.getAllPolls);
  app.get('/poll/:id', authMiddleware.checkAuth, pollController.getPollById);
};
