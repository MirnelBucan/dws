module.exports = {
  index: (req, res, next) => {
    res.render('index');
  },
  register: (req, res, next) => {
    res.render('register');
  },
  login: (req, res, next) => {
    res.render('login');
  }
};