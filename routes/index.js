"use strict";

var express = require('express');
var router = express.Router();
var appdata = require("../data.json");
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};

/* GET projects page. */
exports.projects = function(req, res) {
    var myProjects = [];
    myProjects = appdata.projects;

    res.render('projects', { 
        title: 'Projects',
        projects: myProjects,
        page: "projects"
  });
};