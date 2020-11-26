const api = require("./routes/api");

module.exports = (app) => {
  app.use("/api", api);
};
