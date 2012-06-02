var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var PMConnection = require('../schemas/PMConnection.js').PMConnection;

exports.PMProject = new mongoose.Schema({ 
});

exports.PMProject.plugin(commonPlugin);
