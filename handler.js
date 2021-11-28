const { server } = require("./src/server")

exports.graphqlHandler = server.createHandler();
