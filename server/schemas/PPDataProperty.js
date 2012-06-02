var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPDataProperty = new mongoose.Schema({ 
});

exports.PPDataProperty.plugin(commonPlugin);
