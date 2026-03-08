require("dotenv").config();

const app = require("./app");
const sequelize = require("./src/config/database");

const port = process.env.PORT || 3000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database connection successfully established");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err, "DB Connection Error occurred");
  });
