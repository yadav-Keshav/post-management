const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, '../../../../.env') });

exports.DB_URI = process.env.DB_URI;
exports.KEY = process.env.KEY;