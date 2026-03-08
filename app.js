const express = require("express");
const userRoutes = require("./src/routes/user.routes");
const taskRoutes = require("./src/routes/task.routes");

const app = express();

app.use(express.json());

// user
app.use("/users", userRoutes);

// task
app.use("/tasks", taskRoutes);

module.exports = app;
