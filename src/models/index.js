const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = require("./user")(sequelize, DataTypes);
const Task = require("./task")(sequelize, DataTypes);

User.hasMany(Task, { foreignKey: { name: "userId", allowNull: false }, onDelete: "CASCADE" });
Task.belongsTo(User, { foreignKey: { name: "userId", allowNull: false }, onDelete: "CASCADE" });

module.exports = {
  sequelize,
  User,
  Task,
};
