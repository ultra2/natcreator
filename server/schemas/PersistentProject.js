var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PersistentProject = new mongoose.Schema({ 
});

exports.PersistentProject.plugin(commonPlugin);
