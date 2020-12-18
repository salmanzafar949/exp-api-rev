const mongoose = require('mongoose')
require('dotenv/config')

/**
 * Connect To Database
 **/

const Conn = mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'))

module.exports = Conn