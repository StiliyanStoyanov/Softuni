global.__basedir = __dirname;
const dbConnector = require('./config/db');
dbConnector().then(() => {
    const config = require('./config/config');
    const app = require('express')();
    require('./config/express')(app);
    require('./config/routes')(app);

    app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
}).catch(console.error);







// Mongodb basic server start below:
// const dbUrl = 'mongodb://localhost:27017';
// const { MongoClient } = require('mongodb');
// const client = new MongoClient(dbUrl);
//
// client.connect(function (err, client) {
//   if (err) { console.error(err); return; }
//   const db = client.db('testdb');
//   const users = db.collection('users');
//
//   users.insert({ name: 'test' }).then(qr => {
//     console.log(qr);
//     users.deleteMany({ name: 'test ' }).then(qr => {
//       console.log(qr);
//     });
//   });
// });