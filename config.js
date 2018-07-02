module.exports = {
  port: 3000,
  dbConnectionString: 'postgres://postgres:postgres@localhost:5432/ccc',
  saltRounds: 2,
  jwtSecret: 'this-is_top-secret',
  tokenExpireTime: '6h'
};
