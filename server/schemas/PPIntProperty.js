var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPIntProperty = new mongoose.Schema({ 
});

exports.PPIntProperty.plugin(commonPlugin);
