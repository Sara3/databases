// CONTROLLERS
var models = require('../models/index');

module.exports = {
  messages: {
    get: function (req, res) {
      res.status(200).send(models.messages.get());
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.status(201).send(models.messages.post(req.body));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("this is user get");
      res.status(200).send(models.users.get());
    },
    post: function (req, res) {
      console.log("req body", req.body);
      res.status(201).send(models.users.post(req.body));
    }
  }
};

// app.post('/login',function(req,res){
//     var email = req.body.email;
//     var pass = req.body.password;
//     var data = {
//         "Data":""
//     };
//     connection.query("SELECT * from login WHERE email=? and password=? LIMIT 1",[email,pass],function(err, rows, fields){
//         if(rows.length != 0){
//             data["Data"] = "Successfully logged in..";
//             res.json(data);
//         }else{
//             data["Data"] = "Email or password is incorrect.";
//             res.json(data);
//         }
//     });
// });
