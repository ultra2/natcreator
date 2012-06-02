var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PMAccountProject = new mongoose.Schema({ 
});

exports.PMAccountProject.plugin(commonPlugin);
