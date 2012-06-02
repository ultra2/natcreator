var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQIsAuthenticated = new mongoose.Schema({ 
});

exports.RQIsAuthenticated.plugin(commonPlugin);
