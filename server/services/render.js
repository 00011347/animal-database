const Userdb = require("../model/model.js");

exports.homeRoutes = async (req, res) => {
  const users = await Userdb.find({});
  res.render("index", { users: users });
};

exports.add_user = (req, res) => {
  res.render("add_user.ejs");
};
exports.update_user = async (req, res) => {
  try {
    const userData = await Userdb.findByIdAndUpdate(req.params.id);

    res.render("update_user.ejs", { user: userData });
  } catch (error) {
    res.status(404).send({
      status: "failed",
      message: error,
    });
  }
};
