const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { PubSub, ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");

dotenv.config();

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

// DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
    return server.listen({ port: 5000 });
  })

  .then((res) => {
    console.log(`Server OK at ${res.url}`);
  });
