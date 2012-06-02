var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQResetPasswordRequest = new mongoose.Schema({ 
});

exports.RQResetPasswordRequest.plugin(commonPlugin);
