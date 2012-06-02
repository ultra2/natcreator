var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PMRegistration = new mongoose.Schema({ 
});

exports.PMRegistration.plugin(commonPlugin);
