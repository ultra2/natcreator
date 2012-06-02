var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PMAccount = new mongoose.Schema({ 
});

exports.PMAccount.plugin(commonPlugin);
