import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFiles } from "@graphql-tools/load-files";
import models from "./models/index";
import path from "path";
async function main() {
  const app = express();

  const types = await loadFiles(path.join(__dirname, "./schemas"));
  const typeDefs = mergeTypeDefs(types);
  const resolverFunctions = await loadFiles(
    path.join(__dirname, "./resolvers")
  );
  const resolvers = mergeResolvers(resolverFunctions);
  const schema = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      models: models.models,
    },
  });
  schema.applyMiddleware({
    app,
    cors: false,
  });
  schema.installSubscriptionHandlers(app);
  models
    .authenticate()
    .then(async () => {
      console.log("database conected");
      await models.sync();
    })
    .catch((err) => console.log("Error: " + err));
  app.listen({ port: 5001 }, () =>
    console.log(`🚀 Server ready at http://localhost:5001${schema.graphqlPath}`)
  );
}
main();
