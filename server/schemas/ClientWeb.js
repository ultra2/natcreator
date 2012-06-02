var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.ClientWeb = new mongoose.Schema({ 
});

exports.ClientWeb.plugin(commonPlugin);
