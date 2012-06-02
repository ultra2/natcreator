var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CDMetaCategoryRow = new mongoose.Schema({ 
});

exports.CDMetaCategoryRow.plugin(commonPlugin);
