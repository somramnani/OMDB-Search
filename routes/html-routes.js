var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  //HTML ROUTES
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  //
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  //

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  //CSS ROUTES
  app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/styles/styles.css"));
  });

  //IMAGE ROUTING
  app.get("/movie", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/images/movie3.jpg"));
  });
  app.get("/localmovies", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/images/local_movies.png"));
  });

  app.get("/curtains", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/images/curtains.jpg"));
  });
};
