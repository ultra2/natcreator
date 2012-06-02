var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPStringProperty = new mongoose.Schema({ 
});

exports.PPStringProperty.plugin(commonPlugin);
