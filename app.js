const express = require("express");
const pageRoute = require("./routes/pageRoutes");

const app = express();

// TEmplate Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Routes
app.use("/", pageRoute);

const port = 3000;
app.listen(port, () => {
  console.log("App started on port 3000");
});
