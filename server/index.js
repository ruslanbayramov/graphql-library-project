import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./type_defs/libraryTypeDefs.js";
import { resolvers } from "./resolvers/libraryResolvers.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
cors();

mongoose
  .connect(process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD))
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err.message));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

console.log(process.env.PORT);
const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT || 8080 },
});

console.log(`Server listens at ${url}`);
