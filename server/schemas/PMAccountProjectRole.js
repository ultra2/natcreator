var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PMAccountProjectRole = new mongoose.Schema({ 
});

exports.PMAccountProjectRole.plugin(commonPlugin);
