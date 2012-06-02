var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQRegistration = new mongoose.Schema({ 
});

exports.RQRegistration.plugin(commonPlugin);
