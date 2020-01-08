const express = require('express');
const fs = require('fs');
const {ApolloServer, gql} = require('apollo-server-express');
const resolvers = require('./resolvers');
const routes = require('./routes');
const { prisma } = require('./generated/prisma-client');

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


app.listen({port: 4000}, () => {
    console.log("Server running on localhost:4000" + server.graphqlPath)
});


