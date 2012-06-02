var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CDMetaPropertyRow = new mongoose.Schema({ 
});

exports.CDMetaPropertyRow.plugin(commonPlugin);
