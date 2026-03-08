const { User } = require("../models");

// create user
async function createUser(req, res) {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    // check for existing user email
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const user = await User.create({ name, email });
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ message: "Failed to create user" });
  }
}

// get all user
async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch users" });
  }
}

// get user by id
async function getUserById(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch user" });
  }
}

// delete user
async function deleteUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: "Failed to delete user" });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};
