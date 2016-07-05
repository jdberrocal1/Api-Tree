var Land = require('./landModel');
var _ = require('lodash');
var ObjectId = require('mongoose').Types.ObjectId;

exports.paramsId = function(req, res, next, id) {
  Land.findById(id)
    .then(function(land) {
      if (!land) {
        next(new Error('No land with that id'));
      } else {
        req.land = land;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.paramsOwnerId = function(req, res, next, ownerId ) {
    var ObjectId = require('mongoose').Types.ObjectId;
    var query= {'owner': new ObjectId(ownerId)};
    Land.find(query)
      .then(function(lands){
        req.lands=lands || [];
        next();
      }, function(err){
        next(err);
      });
};

exports.get = function(req, res, next) {
    var lands = req.lands;
    res.json(lands);
};

exports.getOne = function(req, res, next) {
  var land = req.land;
  res.json(land);
};

exports.put = function(req, res, next) {
  var land = req.land;

  var update = req.body;

  _.merge(land, update);

  Land.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newLand = req.body;
  Land.create(newLand)
    .then(function(land) {
      res.json(land);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.post.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
