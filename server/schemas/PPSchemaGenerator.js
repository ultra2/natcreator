var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPSchemaGenerator = new mongoose.Schema({ 
});

exports.PPSchemaGenerator.plugin(commonPlugin);
