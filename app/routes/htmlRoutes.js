// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var express = require("express");
// ===============================================================================

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

  //Route for css
  app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/styles/styles.css"));
  });

  // Images
  app.get("/movie", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/images/movie3.jpg"));
  });
  app.get("/localmovies", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/images/local_movies.png"));
  });

  app.get("/index", function(req,res){
    res.sendFile(path.join(__dirname, "/../public/javascript/index.js"))
  })

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
// ===============================================================================
