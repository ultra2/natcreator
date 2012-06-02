var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPBooleanProperty = new mongoose.Schema({ 
});

exports.PPBooleanProperty.plugin(commonPlugin);
