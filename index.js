const express = require("express");
const helmet = require("helmet");
const config = require("config");

const app = express();
app.use(helmet());

console.log("name of the project ========>", config.get("env"));

if (app.get("env") === "development") {
  console.log("PORT =========> ", process.env.PORT);
  console.log("NODE ENV =========> ", process.env.NODE_ENV);
  console.log("NODE ENV =========> ", app.get("env"));
}

app.use((req, res, next) => {
  console.log("validating user .....");
  next();
});

require("./routes")(app);

const port = process.env.PORT || 9080;
app.listen(port, () => console.log("server start listening on ...", port));
