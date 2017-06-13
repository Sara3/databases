var db = require('../db/index');
// console.log('db', db);
module.exports = {
  messages: {
    get: function () {
      db.dbConnection.query('select * from messages', function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        return result;
      });
      // db.dbConnection.end();
    }, // a function which produces all the messages
    post: function (data) {
      db.dbConnection.query('INSERT INTO `messages` (text) values (?)', [data.text], function(err, result) {
        if (err) throw err;
        // console.log("inserted in the DB", result);
      })
      // db.dbConnection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.dbConnection.query('select * from users', function (err, result) {
        if (err) throw err;
        console.log("users " + result);
        return result;
      });
        // db.dbConnection.end();
    },
    post: function (data) {
      console.log('data.username', data.username);
      db.dbConnection.query('INSERT INTO `users` (name) values (?)', [data.username], function(err, result) {
        if (err) throw err;
        console.log("inserted users in the DB", result);
      })
      // db.dbConnection.end();
    } // a

  }
};
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });
