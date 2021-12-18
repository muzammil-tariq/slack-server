import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";

import typeDefs from "./schema";
import resolvers from "./resolvers";

export const schema = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

// const graphqlEndpoint = "/graphql";

// app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));

// app.use("/graphiql", graphiqlExpress({ endpointURL: graphqlEndpoint }));
schema.applyMiddleware({
  app,
  cors: false,
});
schema.installSubscriptionHandlers(app);

app.listen({ port: 8081 }, () =>
  console.log(`🚀 Server ready at http://localhost:8081${schema.graphqlPath}`)
);
