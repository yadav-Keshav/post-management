const mongoose = require('mongoose');
const { DB_URI } = require('./env');

module.exports = () => {
    console.log(DB_URI)
    mongoose.connect(DB_URI)
        .then((db) => { console.log(`sucefully Connected: ${db.connection.host}`) })
    // .catch((err) => { console.log(err.message) })
}