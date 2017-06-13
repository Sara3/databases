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
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
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
