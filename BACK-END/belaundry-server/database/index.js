const mongoose = require('mongoose');
const { dbHost, dbName, dbPort, dbUser, dbPass } = require('../app/config');

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

module.exports = database;