var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PMConnection = new mongoose.Schema({ 
});

exports.PMConnection.plugin(commonPlugin);
