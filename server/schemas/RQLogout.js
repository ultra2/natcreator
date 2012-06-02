var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQLogout = new mongoose.Schema({ 
});

exports.RQLogout.plugin(commonPlugin);
