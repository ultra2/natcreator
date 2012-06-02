var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQIsAccountAvailable = new mongoose.Schema({ 
});

exports.RQIsAccountAvailable.plugin(commonPlugin);
