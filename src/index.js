const { ApolloServer } = require('apollo-server');
const connectDB = require('./config/db');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const models = require('./models');

console.log(`
  Your random number is: ${Math.random()}
  (edit any file to auto-restart this script)
`);
