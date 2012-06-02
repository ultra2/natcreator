var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQFile = new mongoose.Schema({ 
});

exports.RQFile.plugin(commonPlugin);
