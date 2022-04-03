var Userdb = require("../model/model");

// creating and saving new and
exports.create = (req, res) => {
  // validating requests
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error has occured while creating operation",
      });
    });
};

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res) => {
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message ||
            "Error has occured while recapturing user information",
        });
    });
};

// Update a new identified user by user id
exports.update = (req, res) => {
  if(!req.body){
    return res
      .status(400)
      .send({message:"Data to update cannot be empty"})
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
  .then(data=>{
    if(!data){
      res.status(404).send({message:`Cannot Update user with ${id}. User might not be found`})
    }else{
      res.send(data)
    }
  })
  .catch(err=>{
    res.status(500).send({message:"Error update user information"})
  })
};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then(data=>{
      if(!data){
        res.status(404).send({message:`Cannot delete with id ${id}. Id might be wrong`})
      }else{
        res.send({
          message: "User was deleted successfully!"
        })
      }
    })
    .catch(err=>{
      res.status(500).send({
        message:"Could not delete User with id="+id
      })
    })
};
