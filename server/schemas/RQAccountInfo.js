var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQAccountInfo = new mongoose.Schema({ 
});

exports.RQAccountInfo.plugin(commonPlugin);
