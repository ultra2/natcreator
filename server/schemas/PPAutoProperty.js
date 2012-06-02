var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPAutoProperty = new mongoose.Schema({ 
});

exports.PPAutoProperty.plugin(commonPlugin);
