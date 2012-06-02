var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PersistentMaster = new mongoose.Schema({ 
});

exports.PersistentMaster.plugin(commonPlugin);
