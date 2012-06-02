var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.Request = new mongoose.Schema({ 
});

exports.Request.plugin(commonPlugin);
