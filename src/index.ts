import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { rootResolver } from "./graphql/resolvers";
import { rootSchema } from "./graphql/schema";
import { getSafeEnv } from "./utils/getSafeEnv";

const app = express();
const httpServer = http.createServer(app);
const port = getSafeEnv("PORT");

const server = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  includeStacktraceInErrorResponses: false,
});

app.use("/api/", (resp, req) => {
  req.send("<h1>Hello wrld!</h1>");
});

server.start().then(() => {
  app.use(cors(), bodyParser.json(), expressMiddleware(server));
  httpServer.listen({ port }, () => {
    console.log(`🚀 Server started at http://localhost:${port}`);
  });
});
