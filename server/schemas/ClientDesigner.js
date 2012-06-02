var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.ClientDesigner = new mongoose.Schema({ 
});

exports.ClientDesigner.plugin(commonPlugin);
