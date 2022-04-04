const User = require("../model/model");
// Create
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.redirect("/");
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

// Read
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      res.status(404).json({
        message: "Something went wrong",
        status: 404,
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(err.statusCode).json({
      message: "Couldn't get data",
      status: err.statusCode,
      reason: err,
    });
  }
};

exports.getUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id);
  console.log(user);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

// Update
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    //res.redirect('/')
  } catch (err) {
    res.status(err.statusCode).json({
      message: "Something went wrong",
      status: err.statusCode,
      reason: err,
    });
  }
};

// Delete
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(err.statusCode).json({
      message: "Something went wrong",
      status: err.statusCode,
      reason: err,
    });
  }
};
