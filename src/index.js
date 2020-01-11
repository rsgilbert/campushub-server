const express = require('express');
const fs = require('fs');
const {ApolloServer, gql} = require('apollo-server-express');
const resolvers = require('./resolvers');
const routes = require('./routes');
const { prisma } = require('./generated/prisma-client');
require('dotenv').config()


const port = process.env.PORT || 4000
// schema
const typeDefs = gql`${
    fs.readFileSync(__dirname.concat('/schema.graphql'))
}`;

// server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({
        req,
        prisma
    })
});


// rest api
const app = express();
app.use(routes);
server.applyMiddleware({app});


app.listen({ port }, () => {
    console.log(`Server running on localhost:${port}${server.graphqlPath}`)
});
