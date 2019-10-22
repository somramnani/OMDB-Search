var db = require("../models");
var passport = require("../config/passport");
//
module.exports = function(app) {
  // =============================================================
  // LOGIN/ SIGNUP ROUTES
  // =============================================================
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });
  //

  //If the user is created successfully, proceed to log the user in, otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
  //
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  // =============================================================

  // =============================================================
  //POSTING ROUTES
  // =============================================================
  // GET route for getting all of the movie posts
  app.get("/api/posts/", function(req, res) {
    // Finds all posts, and returns them to the user with res.json
    db.Post.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single movie post
  app.get("/api/posts/:id", function(req, res) {
    //Sequelize code to find a single post where the id is equal to req.params.id,
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      // returns the result to the user with res.json
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    // Sequelize code for creating a post using req.body,
    console.log(req.body);

    db.Post.create({
      title: req.body.title
    }).then(function(dbPost) {
      // Returns the result using res.json
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Sequelize code to delete a post where the id is equal to req.params.id,

    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      //Returns the result to the user using res.json
      res.json(dbPost);
    });
  });
};
