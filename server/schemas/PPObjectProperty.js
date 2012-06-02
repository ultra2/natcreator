var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPObjectProperty = new mongoose.Schema({ 
});

exports.PPObjectProperty.plugin(commonPlugin);
