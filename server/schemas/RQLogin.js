var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQLogin = new mongoose.Schema({ 
});

exports.RQLogin.plugin(commonPlugin);
