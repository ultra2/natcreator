var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPDateProperty = new mongoose.Schema({ 
});

exports.PPDateProperty.plugin(commonPlugin);
