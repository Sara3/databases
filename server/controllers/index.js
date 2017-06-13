// CONTROLLERS
var models = require('../models/index');

module.exports = {
  messages: {
    get: function (req, res) {
      res.status(200).send(models.messages.get())
    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users');
    },
    post: function (req, res) {}
  }
};
