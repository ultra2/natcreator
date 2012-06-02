var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CDMetaRow = new mongoose.Schema({ 
});

exports.CDMetaRow.plugin(commonPlugin);
