var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQResetPassword = new mongoose.Schema({ 
});

exports.RQResetPassword.plugin(commonPlugin);
