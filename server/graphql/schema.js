const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');

const db = require('../db');

const User = new GraphQLObjectType({
  name: 'User',
  description: 'users',
  fields: () => ({
    userId: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
});

const query = new GraphQLObjectType({
  name: 'query',
  description: 'Root query',
  fields: () => ({
    users: {
      type: new GraphQLList(User),
      resolve: async () => {
        const users = await db.User.findAll();
        return users;
      },
    },
  }),
});

const schema = new GraphQLSchema({ query });

module.exports = schema;
